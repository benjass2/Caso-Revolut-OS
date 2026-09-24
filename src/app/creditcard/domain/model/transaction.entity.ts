import {ProductDetailsResource} from '../../infrastructure/resource/transaction.resource';

export interface ProductDetails {
  productType: string;
  description: string;
  quantity: number;
}
export interface ScheduleItem {
  installmentNumber: number;
  installmentAmount: number;
  paymentDate: string;
  status: string;
}

export class Transaction {
  constructor(
    public readonly id: number | string,
    public readonly cardNumber: string,
    public readonly merchantName: string,
    public readonly productDetails: ProductDetails,
    public readonly totalInstallments: number,
    public readonly schedule: ScheduleItem,
    public readonly transactionDate: string,
    public readonly amount: number,
    public readonly currency: string
  ) {}
}
