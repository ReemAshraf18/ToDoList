import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  Title: string = "To Do List Application";
  imageLink: string = "https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg";
  tasks: string[] = [];
  newTask: string = "";
  isAvailable:boolean = false
  addTask() {
    if (this.newTask.trim() !== "") {
      this.tasks.push(this.newTask);
      this.newTask = "";
      this.isAvailable = true;
    }
    // console.log(this.tasks);
  }
  removeTask(index:number) 
  {
    this.tasks.splice(index, 1); 
    this.isAvailable = this.tasks.length > 0;
  }
  // editTask(index: number)
  // {
  //   let updateTask = prompt("editTask", this.tasks[index]);
  //   if(updateTask !== null)
  //   {
  //     this.tasks[index] = updateTask.trim();
  //   }
  // }
  editTask(index: number, edit:string) : string | void
  {
    // const trimedTask = edit.trim();
    if(edit.trim() !== "")
    {
      this.tasks[index] = edit;
    }
    else
    {
      edit = this.tasks[index];
      return this.newTask = edit;
    }
    this.newTask = "";
  }
}
