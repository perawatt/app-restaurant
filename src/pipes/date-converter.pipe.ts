import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value / 100).toFixed(2);
  }

}
