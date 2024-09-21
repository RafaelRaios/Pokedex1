import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feetToMeter'
})
export class FeetToMeterPipe implements PipeTransform {

  transform(height: number): number {
    return (Math.round(height * (0.3048) * 100) / 100);
  }

}
