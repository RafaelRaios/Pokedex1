import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKg'
})
export class ToKgPipe implements PipeTransform {

  transform(weight: number): string | number {
    return weight === (Math.round(weight/10) * 10) ? `${weight/10}.0` : weight / 10;
  }

}
