import type { CreateBankModel } from '@/entities/bank'

export async function createBank(bank: CreateBankModel) {
  return fetch('/api/banks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bank),
  })
}
