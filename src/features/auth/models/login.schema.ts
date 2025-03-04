import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean(),
  }),
)
