import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addsubtitle'
})
export class AddsubtitlePipe implements PipeTransform {

  transform(value: string,gender: string): string {
    if (gender.toLowerCase()==="male"){
      return "Mr. " + value
    }
    else(gender.toLowerCase()==="female")
    return "Miss. " + value;
  }

}
