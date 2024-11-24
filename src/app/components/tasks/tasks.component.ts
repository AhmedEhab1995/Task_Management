import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {Task} from '../../Task'; 
import {TaskService} from '../../services/task.service'
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component"; 
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';



@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent, RouterModule, NavigationButtonComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [TaskService]
})
export class TasksComponent  implements OnInit{
  tasks: Task[] =  [];

  constructor(private taskService: TaskService){}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks );
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
