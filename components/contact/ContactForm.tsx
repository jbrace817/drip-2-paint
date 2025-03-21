"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import CoverageMap from "./EmbeddedMap";
import { debugLog } from "@/utils/debugLog";
import { ContactInfo } from "./ContactInfo";

// Define your form schema with Zod
const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name cannot exceed 50 characters")
    .refine((name) => /^[a-zA-Z\s\-']+$/.test(name), {
      message:
        "First name can only contain letters, spaces, hyphens and apostrophes",
    }),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name cannot exceed 50 characters")
    .refine((name) => /^[a-zA-Z\s\-']+$/.test(name), {
      message:
        "Last name can only contain letters, spaces, hyphens and apostrophes",
    }),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  address: z
    .string()
    .max(100, "Address cannot exceed 100 characters")
    .optional(),
  zipCode: z.string().max(10, "Zipcode cannot exceed 10 characters").optional(),

  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject cannot exceed 100 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
  phone: z
    .string()
    .transform((str) => (str === "" ? undefined : str))
    .optional()
    .superRefine((val, ctx) => {
      if (val && !/^[0-9\s\-]+$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Phone can only contain numbers, spaces, and hyphens",
        });
      }
    }),
  heardFrom: z.enum(["Google", "Social Media", "Friend", "Other"]).optional(),
  timeline: z
    .enum(["ASAP", "1-3 months", "3-6 months", "6+ months", "Just Exploring"])
    .optional(),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

const CoverageSection = () => (
  <>
    <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
      Our Coverage Area
    </h3>
    <CoverageMap />
  </>
);

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);

  // Initialize form with react-hook-form and shadcn/ui Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
      zipCode: "",
      address: "",
      heardFrom: undefined,
      timeline: undefined,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      debugLog("Attempting to submit form...");

      const fullName = `${data.firstName} ${data.lastName}`;

      // Debug log for client ID
      debugLog("Client ID from env:", process.env.CLIENT_ID);

      const submitData = {
        name: fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
        client_id:
          process.env.CLIENT_ID || "550e8400-e29b-41d4-a716-446655440000", // Fallback to test ID
        phone: data.phone,
        address: data.address,
        zipCode: data.zipCode,
        heardFrom: data.heardFrom || null,
        timeline: data.timeline || null,
      };

      debugLog("Submitting data: " + JSON.stringify(submitData, null, 2));

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      debugLog("Message submitted successfully:", result);
      toast.success("Message sent successfully!");

      // Reset the form and increment key to force re-render
      form.reset(
        {
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          zipCode: "",
          address: "",
          heardFrom: undefined,
          timeline: undefined,
        },
        {
          keepDefaultValues: true,
        },
      );
      setFormKey((prev) => prev + 1);
    } catch (error) {
      debugLog("Error submitting form:", error);
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-16">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full max-w-sm flex-col justify-between gap-10">
            <div className="flex flex-col justify-evenly gap-10">
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                  Contact Details
                </h3>
                <ContactInfo />
              </div>
            </div>
            <div className="mt-10 hidden lg:block">
              <CoverageSection />
            </div>
          </div>
          <div className="max-w-screen order-3 block w-full lg:hidden">
            <CoverageSection />
          </div>
          <div className="w-full max-w-screen-sm px-4 py-14 md:py-16 lg:px-0">
            {/* Form using shadcn/ui Form component */}
            <Form {...form}>
              <form
                key={formKey}
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto flex max-w-screen-lg flex-col gap-6 rounded-lg border p-10"
              >
                {/* First and last name in a flex row */}
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <div
                          className={
                            form.formState.errors.firstName ||
                            form.formState.errors.lastName
                              ? "h-8"
                              : "h-0"
                          }
                        >
                          {/* Fixed height container */}
                          <FormMessage className="absolute text-xs" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <div
                          className={
                            form.formState.errors.lastName ||
                            form.formState.errors.firstName
                              ? "h-8"
                              : "h-0"
                          }
                        >
                          {/* Fixed height container */}
                          <FormMessage className="absolute text-xs" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Address and phone number */}
                <div className="flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full md:w-1/3">
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Zip Code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                  {/* Phone field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Email field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Subject field */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="heardFrom"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>How did you hear about us?</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select how you heard about us" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Google">Google</SelectItem>
                            <SelectItem value="Social Media">
                              Social Media
                            </SelectItem>
                            <SelectItem value="Friend">Friend</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem className="relative grid w-full">
                        <FormLabel>Preferred Timeline</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ASAP">ASAP</SelectItem>
                            <SelectItem value="1-3 months">
                              1-3 months
                            </SelectItem>
                            <SelectItem value="3-6 months">
                              3-6 months
                            </SelectItem>
                            <SelectItem value="6+ months">6+ months</SelectItem>
                            <SelectItem value="Just Exploring">
                              Just Exploring
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Schedule your free consultation"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactForm };
