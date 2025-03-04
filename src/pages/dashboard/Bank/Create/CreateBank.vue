<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/card'
import { BankForm } from '@/widgets/bank'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create New Bank</h2>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <BankForm />
    </CardContent>
  </Card>
</template>
