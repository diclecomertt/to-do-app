import { Component } from '@angular/core';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { MatDialog } from '@angular/material/dialog';
import { OnInit } from '@angular/core';

export function emptyItem(){
  return {
    date:undefined,
    done:false,
    name:undefined,
    id:undefined
  } as Item
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Item[] = [];

  constructor(public dialog: MatDialog) { }

  openDialog(item:Item): void {
    if(!item){
      item = emptyItem();
    }
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      data:{...item}
    });
    dialogRef.afterClosed().subscribe(data => {
      if (typeof data == "object") {
      
          if(data.id){
            this.updateTodo(data);
          }else{
            this.addToDoList(data);
          }
          
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem("item") == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem("item")).map((todo) => {
        todo.date = new Date(todo.date);
        return todo;
      });
    }

  }

  addToDoList(item: Item) {
    console.log(item)
    item.id = this.todos.length + 1;
    this.todos.push(item);
    this.persistChanges();
  }

  updateTodo(item:Item){
    this.todos = this.todos.map(todo => {
      if(todo.id == item.id ){
        todo = item;
      }
      return todo;
    });
    this.persistChanges();
  }

 

  persistChanges() {
    localStorage.setItem("item", JSON.stringify(this.todos));
  }

  removeItem(item){
   
    this.todos = this.todos.filter(obj => obj !== item);
    localStorage.setItem("item", JSON.stringify(this.todos));

}

}
export interface Item {
  id?:number;
  name: string;
  date: Date;
  done: Boolean;
}
