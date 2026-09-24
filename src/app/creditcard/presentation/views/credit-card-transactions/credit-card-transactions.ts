import {Component, inject} from '@angular/core';
import {TransactionCard} from '../../components/transaction-card/transaction-card';
import {TransactionStoreService} from '../../../application/transaction-store.service';
import {TranslatePipe} from '@ngx-translate/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';


@Component({
  imports: [TransactionCard, TranslatePipe, MatProgressSpinner],
  selector: 'app-credit-card-transactions',
  styleUrl: './credit-card-transactions.css',
  templateUrl: './credit-card-transactions.html',
})
export class CreditCardTransactions {
  /**
   * Inyeccion del store de estado reactivo
   */
  public readonly store= inject(TransactionStoreService)

  ngOnInit():void {
    //Dispara la carga de transacciones desde el store
    this.store.loadTransactions();
  }
}
