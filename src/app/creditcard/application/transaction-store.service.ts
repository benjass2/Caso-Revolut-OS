import { Transaction } from '../domain/model/transaction.entity';
import { TransactionAssembler } from '../infrastructure/assembler/transaction.assembler';
import { TransactionService } from '../infrastructure/service/transaction.service';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionStoreService {

  private readonly transactionService = inject(TransactionService);

  private readonly _transactions = signal<Transaction[]>([]);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _errorMessage = signal<string | null>(null);

  public readonly transactions = this._transactions.asReadonly();
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly errorMessage = this._errorMessage.asReadonly();

  public loadTransactions(): void {

    this._isLoading.set(true);
    this._errorMessage.set(null);

    this.transactionService.getTransactions().subscribe({

      next: (resources) => {

        const domainEntities =
          TransactionAssembler.toEntitiesFromResources(resources);

        this._transactions.set(domainEntities);
        this._isLoading.set(false);
      },

      error: (error) => {

        console.error(error);

        this._errorMessage.set(
          'Error al cargar las transacciones'
        );

        this._isLoading.set(false);
      }

    });
  }
}
