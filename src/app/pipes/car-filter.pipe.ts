import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string,): Car[] {
    filterText  = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Car)=>p.carName.toLocaleLowerCase().indexOf(filterText)!== -1):value;
  }
}
