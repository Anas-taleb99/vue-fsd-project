import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const bankSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Bank name must be at least 2 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    code: z.string().min(3, 'Bank code must be at least 3 characters'),
  }),
)
