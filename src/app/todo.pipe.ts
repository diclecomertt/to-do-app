import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
  pure: false
})
export class TodoPipe implements PipeTransform {

  transform(value: any[], time: string): any[] {
    //console.log(value, time)

    return value.filter((todo) => {
      if (todo != null) {
        const midnight = new Date(Date.now());
        midnight.setHours(0, 0, 0, 0);

        if (time == "past") {
          return todo.date < midnight;
        } else if (time == "future") {
          midnight.setHours(23, 59, 59, 999);
          return todo.date > midnight;
        } else if (time == "today") {
          const dueDate = new Date(todo.date);
          dueDate.setHours(0, 0, 0, 0);
          //console.log(dueDate, midnight)
          return midnight.toString() === dueDate.toString();
        } else {
          throw new Error(`unexpected time has been provided. got "${time}" but expected one of these: 'past', 'future', 'today' `)
        }
      }
    })

    return value;
  }

}
