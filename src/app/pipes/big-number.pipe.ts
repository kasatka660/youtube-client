import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {

  transform(value: string): string {
    const thousandLength = 4;
    const millionLength = 7;
    if (value.length >= thousandLength) {
      const numbValue = +value;
      if (value.length >= millionLength) {
        return this.getMillionNumber(numbValue);
      }
      return this.getThousandNumber(numbValue);
    }
    return value;
  }

  getThousandNumber(value: number): string {
    const thousand = 1000;
    return value % thousand === 0 ? ((value / thousand).toFixed(0) + 'K') : ((value / thousand).toFixed(1) + 'K');
  }

  getMillionNumber(value: number): string {
    const million= 1000000;
    return value % million === 0 ? ((value / million).toFixed(0) + 'M') : ((value / million).toFixed(1) + 'M');
  }

}
