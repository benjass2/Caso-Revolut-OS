//Se encarga exclusivamente de la comunicacion I/O (peticiones HTTP)
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {TransactionResource} from '../resource/transaction.resource';
import {Transaction} from '../../domain/model/transaction.entity';

export interface BankingResponse{
  transactions: Transaction[];
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  /**
   * Inyeccion moderna de dependecias mediante inject()
   */
  private readonly http=inject(HttpClient);

  /**
   * Enpoint
   */
  private readonly baseUrl='https://raw.githubusercontent.com/upc-is-si729/daos-language-reference/refs/heads/master/frontend/jsons/banking.json'

  /**
   * Realiza la peticion GET al recurso transactions.
   */
  public getTransactions():Observable<TransactionResource[]>{
    return this.http.get<BankingResponse>(this.baseUrl).pipe(map(response=>response.transactions||[]));
  }
}





















