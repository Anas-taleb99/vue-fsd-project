<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { PasswordInput, useLogin } from '@/features/auth'

const { form, isSubmitting, onSubmit } = useLogin();

</script>

<template>
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

    <PasswordInput :form="form" />

    <div class="flex items-center space-x-2">
      <FormField v-slot="{ componentField }" name="remeber" :form="form">
        <FormItem>
          <!-- <FormLabel>Password</FormLabel> -->
          <FormControl>
            <div class="flex items-start gap-2">
              <Input type="checkbox" id="remember" v-bind="componentField"
                class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
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
</template>
