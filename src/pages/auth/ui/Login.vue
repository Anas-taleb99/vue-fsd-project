<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-primary hover:text-primary/90">
            create a new account
          </a>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div class="space-y-4 rounded-md shadow-sm">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                :class="{ 'border-red-500': errors.email }"
                placeholder="you@example.com"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" class="text-sm font-medium text-primary hover:text-primary/90">
                Forgot your password?
              </a>
            </div>
            <div class="mt-1">
              <input
                id="password"
                v-model="form.password"
                name="password"
                type="password"
                autocomplete="current-password"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                :class="{ 'border-red-500': errors.password }"
                placeholder="••••••••"
              />
              <p v-if="errors.password" class="mt-1 text-sm text-red-500">
                {{ errors.password }}
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="form.rememberMe"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <span v-if="isSubmitting" class="mr-2">
              <svg
                class="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional().default(false),
})

// Form state
const form = reactive({
  email: '',
  password: '',
  rememberMe: false,
})

// Error state
const errors = reactive({
  email: '',
  password: '',
})

const isSubmitting = ref(false)

// Form submission handler
const onSubmit = async () => {
  // Reset errors
  errors.email = ''
  errors.password = ''

  try {
    // Validate form data against schema
    loginSchema.parse(form)

    // If validation passes, proceed with submission
    isSubmitting.value = true

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle successful login
    console.log('Login successful', form)

    // You would typically redirect or update app state here
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        const path = err.path[0]
        errors[path as keyof typeof errors] = err.message
      })
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
