// src/features/payment/api/getPayments.ts
import type { BankModel } from '@/entities/bank'

export async function getBanks(): Promise<BankModel[]> {
  // Fetch data from your API
  return [
    {
      id: '728ed52f',
      name: 'Bank 1',
      status: 'pending',
      city: 'New York',
    },
    {
      id: '728e2d52f',
      name: 'Bank 2',
      status: 'pending',
      city: 'New York',
    },
    {
      id: '728ed542f',
      name: 'Bank 3',
      status: 'pending',
      city: 'New York',
    },
    {
      id: '728ed522f',
      name: 'Bank 4',
      status: 'pending',
      city: 'New York',
    },
    {
      id: '728ed452f',
      name: 'Bank 5',
      status: 'pending',
      city: 'New York',
    },
    // Additional data...
  ]
}
