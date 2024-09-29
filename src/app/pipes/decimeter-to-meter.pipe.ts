import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimeterToMeter'
})
export class DecimeterToMeterPipe implements PipeTransform {

  transform(height: number): number {
    return height / 10;
  }

}
