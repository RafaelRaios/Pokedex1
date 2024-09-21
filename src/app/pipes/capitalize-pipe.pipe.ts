import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipe'
})
export class CapitalizePipePipe implements PipeTransform {

  transform(text: string): string {
    const capitalizedText = `${text[0].toUpperCase()}${text.slice(1)}`;
    console.log(capitalizedText);
    return capitalizedText;
  }

}
