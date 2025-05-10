// src/lib/validations/auth.ts
import { z } from "zod";


export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  role: z.enum(["user", "admin"]),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Зөв цахим шуудан орууна уу" }),
  password: z.string().min(6, {
    message: "Доод тал нь 6 нэмдэгт байна",
  }),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;