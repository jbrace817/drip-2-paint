import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CustomerConfirmationEmail } from "@/emails/customer-confirmation";
import { OwnerNotificationEmail } from "@/emails/owner-notification";

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_OWNER_EMAIL = process.env.SITE_OWNER_EMAIL;
const FROM_EMAIL = "onboarding@resend.dev"; // Using Resend's default sender

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received form data:", body);

    // Save to database
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert([body])
      .select();

    if (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }

    console.log("Attempting to send customer confirmation email...");
    try {
      // Send confirmation email to customer
      const customerEmailResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: body.email,
        subject: "Thank You for Contacting Us",
        react: CustomerConfirmationEmail({
          firstName: body.name.split(" ")[0],
        }),
      });
      console.log("Customer email result:", customerEmailResult);
    } catch (emailError) {
      console.error("Error sending customer email:", emailError);
      throw emailError;
    }

    // Send notification email to site owner
    if (SITE_OWNER_EMAIL) {
      console.log("Attempting to send owner notification email...");
      try {
        const ownerEmailResult = await resend.emails.send({
          from: FROM_EMAIL,
          to: SITE_OWNER_EMAIL,
          subject: `New Contact Form Submission: ${body.subject}`,
          react: OwnerNotificationEmail({
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
          }),
        });
        console.log("Owner email result:", ownerEmailResult);
      } catch (emailError) {
        console.error("Error sending owner email:", emailError);
        throw emailError;
      }
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing form:", error);
    // Return more detailed error message
    return NextResponse.json(
      {
        error: "Failed to process message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
