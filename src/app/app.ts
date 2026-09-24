import { Component, signal } from '@angular/core';
import {Toolbar} from './shared/presentation/components/toolbar/toolbar';
import {Footer} from './shared/presentation/components/footer/footer';
import {CreditCardTransactions} from './creditcard/presentation/views/credit-card-transactions/credit-card-transactions';

@Component({
  imports: [Toolbar,Footer,CreditCardTransactions],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title='Revolut Open Banking';
}
