
import { useForm } from 'vee-validate'
import { toast } from '@/shared/ui/toast'
import { createBank } from '@/features/bank/api/createBank'
import { bankSchema } from './createBank.schema'

export function useBankForm() {
  const form = useForm({
    validationSchema: bankSchema,
    initialValues: {
      name: '',
      city: '',
      address: '',
      code: '',
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await createBank(values) // API call
      toast({
        title: 'Bank created successfully',
        description: `${values.name} has been added to the system`,
      })
    } catch (error) {
      console.error('Error creating bank:', error)
    }
  })

  return { form, onSubmit }
}
