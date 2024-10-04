import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isHidden'
})
export class IsHiddenPipe implements PipeTransform {

  transform(is_hidden: boolean): string {
    return is_hidden ? " [hidden ability]" : ",";
  }

}
