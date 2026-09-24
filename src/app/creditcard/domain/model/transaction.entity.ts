export class Transaction {
  constructor(
    public readonly id: number | string,
    public readonly cardNumber: string,
    public readonly merchantName: string,
    public readonly productDetails: string,
    public readonly totalInstallments: number,
    public readonly schedule: string,
    public readonly transactionDate: string,
    public readonly amount: number,
    public readonly currency: string
  ) {}
}
