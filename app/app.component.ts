import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

// my-app component (root component):
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>Nomnomicon</h1>
      <task-list [taskList]="tasks" (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Deviled Eggs", 0),
      new Task("Blood Orange", 1),
      new Task("Bloody Mary", 3),
      new Task("Spaghetti", 2)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent',clickedTask);
  }
}
