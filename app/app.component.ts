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
      new Task("Deviled Eggs", "Didn't get any soda on my eggs!", 100),
      new Task("Blood Orange", "Didn't get any cheese on my fruit!", 71),
      new Task("Your face", "I only ate half of it!", 103),
      new Task("Spaghetti", "I feel sick now!", 666)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent',clickedTask);
  }
}
