import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  tasks: Task[] = [];

  addTask() {
    if (this.newTask !== '') {
      this.tasks.push({
        name: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}