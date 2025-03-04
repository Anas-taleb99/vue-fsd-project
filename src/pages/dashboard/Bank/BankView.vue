<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui/card'
import { useI18n } from 'vue-i18n'
import { BankTable } from '@/widgets/bank'
import { Button } from "@/shared/ui/button"
import { PlusIcon } from 'lucide-vue-next';

const { t } = useI18n();

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <div class="flex justify-between">
          <div>
            {{ t("banks") }}
          </div>
          <RouterLink to="/banks/create">
            <Button>
              <PlusIcon />
              {{ t("new") }}
            </Button>
          </RouterLink>

        </div>
      </CardTitle>
      <CardDescription>Description</CardDescription>
    </CardHeader>
    <CardContent>
      <BankTable />
    </CardContent>
  </Card>
</template>