<script setup lang="ts">
import { ref } from 'vue'
import { FormField, FormLabel, FormControl, FormMessage, FormItem } from "@/shared/ui/form"
import type { FormContext } from 'vee-validate';
import { Input } from "@/shared/ui/input";
import { useI18n } from 'vue-i18n';

defineProps<{ form: FormContext }>()

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const { locale } = useI18n();

</script>
<template>
  <FormField v-slot="{ componentField }" name="password" :form="form">
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <div class="relative">
          <Input :type="showPassword ? 'text' : 'password'" placeholder="••••••••" v-bind="componentField" />
          <button type="button" @click="togglePassword"
            class="absolute top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            :class="{ 'left-3': locale === 'ar', 'right-3': locale === 'en' }">
            <!-- <EyeIcon v-if=" !showPassword" class="h-4 w-4" /> -->
            <!-- <EyeOffIcon v-else class="h-4 w-4" /> -->
            show
          </button>
        </div>
      </FormControl>
      <div class="flex justify-end">
        <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
      </div>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
