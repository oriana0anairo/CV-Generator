// src/schema/cvSchema.ts
import { z } from "zod";

export const cvSchema = z.object({
  name: z
    .string({ error: "El nombre es obligatorio" })
    .min(2, "El nombre es obligatorio"),
  email: z.string({ error: "Correo no válido" }).email("Correo no válido"),
  location: z
    .string({ error: "Ubicación obligatoria" })
    .min(2, "Ubicación obligatoria"),
  summary: z
    .string({ error: "Escribe al menos 10 caracteres" })
    .min(10, "Escribe al menos 10 caracteres"),
});

export type CvFormData = z.infer<typeof cvSchema>;
