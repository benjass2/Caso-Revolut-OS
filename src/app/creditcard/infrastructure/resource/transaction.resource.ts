export interface TransactionResource {
  id: number | string;
  cardNumber: string;
  merchantName: string;
  productDetails: string;
  totalInstallments: number;
  schedule: string;
  transactionDate: string;
  amount: number;
  currency: string;
}
