import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doneorder'
})
export class DoneorderPipe implements PipeTransform {

  transform(value: any[]): any[] {
    var sortedArray: any[] = value.sort((a1, a2) => {
      if (a1.done > a2.done) {
        return 1;
      }
      if (a1.done < a2.done) {
        return -1;
      }
      return 0;
    });
    console.log(sortedArray)
    return sortedArray;
  }

}
