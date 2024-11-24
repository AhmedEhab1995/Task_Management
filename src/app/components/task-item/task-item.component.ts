import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icon for deletion
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task?: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task?: Task) {
    this.onToggleReminder.emit(task);
  }
}
