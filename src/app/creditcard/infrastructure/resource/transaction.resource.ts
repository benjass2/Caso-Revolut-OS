export interface ProductDetailsResource{
  productType: string;
  description: string;
  quantity: number;
}

export interface ScheduleResource{
  installmentNumber: number;
  installmentAmount: number;
  paymentDate: string;
  status: string;
}

export interface TransactionResource {
  id: number | string;
  cardNumber: string;
  merchantName: string;
  productDetails: ProductDetailsResource;
  totalInstallments: number;
  schedule: ScheduleResource;
  transactionDate: string;
  amount: number;
  currency: string;
}
