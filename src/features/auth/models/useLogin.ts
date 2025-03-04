import { useForm } from 'vee-validate'
import { loginSchema } from './login.schema'
import { ref } from 'vue'

export function useLogin() {
  const isSubmitting = ref(false)

  const form = useForm({
    validationSchema: loginSchema,
    initialValues: {
      remember: false,
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    isSubmitting.value = true
    try {
      console.log('Logging in...', values)
      // Call API here
    } catch (error) {
      console.error('Login failed', error)
    } finally {
      isSubmitting.value = false
    }
  })

  return {
    isSubmitting,
    form,
    onSubmit,
  }
}
