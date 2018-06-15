import { Pipe, PipeTransform } from '@angular/core';

import { toRoman } from 'roman-numerals';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toRoman(value);
  }

}
