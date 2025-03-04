export interface BankModel {
  id: string
  status: 'pending' | 'approved' | 'rejected'
  name: string
  city: string
  code: string
  address: string
}
