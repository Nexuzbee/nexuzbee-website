import { z } from "zod";

export const enquiryServices = [
  "Website Development",
  "Custom Software Development",
  "IT Support",
  "Cybersecurity Support",
  "Digital Setup for Small Businesses",
  "Tutoring / Academy"
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.enum(enquiryServices, {
    errorMap: () => ({ message: "Please select a valid service." })
  }),
  message: z.string().trim().min(20, "Please add a little more detail to your message.")
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryRecord = EnquiryInput & {
  id: number;
  created_at: string;
};
