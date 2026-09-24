//Patron Assembler para desacoplar el contrato externo
import {TransactionResource} from '../resource/transaction.resource';
import {Transaction} from '../../domain/model/transaction.entity';

export class TransactionAssembler{
  public static toEntityFromResource(resource:TransactionResource):Transaction{
    return new Transaction(
      resource.id ?? resource.cardNumber,
      resource.cardNumber,
      resource.merchantName,
      resource.productDetails,
      resource.totalInstallments,
      resource.schedule,
      resource.transactionDate,
      resource.amount,
      resource.currency
    );
  }

  public static toEntitiesFromResources(resources:TransactionResource[]):Transaction[]{
    return resources ? resources.map((res)=>this.toEntityFromResource(res)):[];
  }

}
