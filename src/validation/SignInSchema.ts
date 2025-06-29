import { z } from "zod";
export const signInSchema = z.object({
    email: z.string().min(5, { message: "Email must by 5 char at least" }),
    password: z
      .string({ invalid_type_error: "Password field is required" })
      .min(8, { message: "Password must by 8 char at least" }),
  });
export type SignInFormData =z.infer<typeof signInSchema> ;