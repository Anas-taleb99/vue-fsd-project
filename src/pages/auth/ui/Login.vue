<template>
  <div class="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-900">Login</h2>

    <form @submit.prevent="onSubmit" class="space-y-6">
      <FormField v-slot="{ componentField }" name="email" :form="form">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="your@email.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password" :form="form">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <div class="relative">
              <Input
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                v-bind="componentField"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <EyeIcon v-if="!showPassword" class="h-4 w-4" />
                <EyeOffIcon v-else class="h-4 w-4" />
              </button>
            </div>
          </FormControl>
          <div class="flex justify-end">
            <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
          </div>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex items-center space-x-2">
        <FormField v-slot="{ componentField }" name="remeber" :form="form">
          <FormItem>
            <!-- <FormLabel>Password</FormLabel> -->
            <FormControl>
              <div class="flex items-start gap-2">
                <Input
                  type="checkbox"
                  id="remember"
                  v-bind="componentField"
                  class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label for="remember" class="text-sm text-gray-700">Remember me</label>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
      </div>

      <Button type="submit" :disabled="isSubmitting" class="w-full">
        {{ isSubmitting ? 'Logging in...' : 'Login' }}
      </Button>

      <div class="text-center text-sm">
        Don't have an account?
        <a href="#" class="text-blue-600 hover:text-blue-800">Sign up</a>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

const showPassword = ref(false)
const isSubmitting = ref(false)

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(6).max(50),
    remember: z.boolean(),
  }),
)

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    remember: false,
  },
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>
