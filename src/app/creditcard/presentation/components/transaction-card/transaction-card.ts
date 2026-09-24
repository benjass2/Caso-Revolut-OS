import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Transaction} from '../../../domain/model/transaction.entity';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import {MatDivider} from '@angular/material/list';
import {DecimalPipe} from '@angular/common';

@Component({
  imports: [MatButtonModule, MatCardModule, MatIcon, TranslatePipe, MatDivider, DecimalPipe],
  selector: 'app-transaction-card',
  styleUrl: './transaction-card.css',
  templateUrl: './transaction-card.html',
})
export class TransactionCard {
  /**
   * Entrada requerida con la entidad de dominio de la transaccion
   */
  @Input({required:true}) transaction!: Transaction;
}
