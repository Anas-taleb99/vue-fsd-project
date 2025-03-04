<script setup lang="ts">
import { useBankForm } from '@/features/bank';
import { useI18n } from 'vue-i18n';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button';

const { t } = useI18n();
const { form, onSubmit } = useBankForm();
</script>

<template>
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
      {{ t('save') }}
    </Button>
  </form>
</template>