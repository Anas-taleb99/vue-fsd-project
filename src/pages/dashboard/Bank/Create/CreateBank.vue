<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useForm } from 'vee-validate'
import { Button } from '@/shared/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { toast } from '@/shared/ui/toast'
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/card'
import { PlusIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Define the schema for bank creation
const bankSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Bank name must be at least 2 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    code: z.string().min(3, 'Bank code must be at least 3 characters'),
  }),
)

// Initialize the form with validation schema
const form = useForm({
  validationSchema: bankSchema,
  initialValues: {
    name: '',
    city: '',
    address: '',
    code: '',
  },
})

// Handle form submission
const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted:', values)
  // Here you would typically send the data to your API
  toast({
    title: 'Bank created successfully',
    description: `${values.name} has been added to the system`,
  })
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>

        <h2 class="text-2xl font-bold mb-6 text-gray-800">Create New Bank</h2>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit" :form="form" class="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Bank Name Field -->
          <FormField v-slot="{ componentField }" name="name" :form="form">
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter bank name" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- City Field -->
          <FormField v-slot="{ componentField }" name="city" :form="form">
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- Address Field -->
          <FormField v-slot="{ componentField }" name="address" :form="form">
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter full address" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- Code Field -->
          <FormField v-slot="{ componentField }" name="code" :form="form">
            <FormItem>
              <FormLabel>Bank Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter bank code" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

        </div>

        <Button type="submit">
          <PlusIcon />
          {{ t('save') }}
        </Button>
      </form>
    </CardContent>
  </Card>

</template>
