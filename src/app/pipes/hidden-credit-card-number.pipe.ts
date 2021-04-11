import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenCreditCardNumber'
})
export class HiddenCreditCardNumberPipe implements PipeTransform {


    transform(creditCardNumber: string): string {
      return creditCardNumber.substring(creditCardNumber.length - 4).padStart(16,'*');
    }
}
