import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoText = "";
  todoList = [];

  constructor() { }

  ngOnInit(): void {
  }
  saveTodo(){
  console.log(this.todoText);
  this.todoList.push(this.todoText);
  this.todoText = "";
  }

}
//1 register the route(app.routing.module.ts)--done
//2 create the html form
// 3 link the input to a variable on the ts
//3.1 Create a fn that responds to a click event on the button
// and console log the text


//4 on click event of the add button

// -add the text to an array

//5 display the list of todos on the html using *ngFor


/*
create an array
on Savetodo push the text to the array
on html use *ngFor*/
