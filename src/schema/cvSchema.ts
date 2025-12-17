// src/schema/cvSchema.ts
import { z } from "zod";

export const cvSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Correo no válido"),
  location: z.string().min(2, "Ubicación obligatoria"),
  summary: z.string().min(10, "Escribe al menos 10 caracteres"),
});

export type CvFormData = z.infer<typeof cvSchema>;
