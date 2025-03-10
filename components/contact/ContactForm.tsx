"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject cannot exceed 100 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  // Initialize form with react-hook-form and shadcn/ui Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Add your form submission logic here
      console.log("Form submitted:", data);

      // Reset the form after successful submission
      form.reset();

      // Show success message (you can implement this)
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="py-14 md:py-16">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  (123) 34567890
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href="mailto:your-email@example.com" className="underline">
                    your-email@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto px-4 py-14 md:py-16 lg:px-0">
            {/* Form using shadcn/ui Form component */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10"
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

                {/* Email field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
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
