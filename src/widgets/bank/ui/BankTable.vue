<!-- src/widgets/payment/ui/PaymentTable.vue -->
<script setup lang="ts">
import { ref, onMounted, h } from 'vue';
import type { ColumnDef } from '@tanstack/vue-table';
import { getBanks } from '@/features/bank';
import { DataTable } from '@/shared/ui/table';
import type { BankModel } from '@/entities/bank';

const data = ref<BankModel[]>([]);

const columns: ColumnDef<BankModel>[] = [
  {
    accessorKey: 'name',
    header: 'name'
    // header: () => h('div', { class: 'text-right' }, 'name'),
  },
  {
    accessorKey: 'city',
    header: "city"
  },
];

onMounted(async () => {
  data.value = await getBanks();
});
</script>

<template>
  <DataTable :columns="columns" :data="data" />
</template>
