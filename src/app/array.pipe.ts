import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {
  // transform(value: any[]): any[] {
  //   var sortedArray: { name: string; date: Date }[] = value.sort((a1, a2) => {
  //     var a1minute = a1.date.getHours() * 60 + a1.date.getMinutes();
  //     var a2minute = a2.date.getHours() * 60 + a2.date.getMinutes();
  //     if (a1minute > a2minute) {
  //       return 1;
  //     }
  //     if (a1minute < a2minute) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   return sortedArray;
  // }

  transform(value: any[]): any[] {
    let sortedArray: any[] = value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return sortedArray;
  }

}

