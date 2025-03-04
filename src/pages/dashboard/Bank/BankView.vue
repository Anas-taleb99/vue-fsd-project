<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui/card'
import { useI18n } from 'vue-i18n'
import { BankTable } from '@/widgets/bank'

const { t } = useI18n();

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ t("banks") }}</CardTitle>
      <CardDescription>Description</CardDescription>
    </CardHeader>
    <CardContent>
      <BankTable />
    </CardContent>
  </Card>
</template>