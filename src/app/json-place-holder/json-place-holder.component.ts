import { Component, OnInit } from '@angular/core';
import { TaskService } from '../servicios/task.service';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-json-place-holder',
  templateUrl: './json-place-holder.component.html',
  styleUrls: ['./json-place-holder.component.scss']
})
export class JsonPlaceHolderComponent implements OnInit {

  constructor(  private taskService: TaskService
              , private dataService: DataService
    ) { }

  ngOnInit() {
  }

  getAllTask() {
    this.taskService.getAllTask().subscribe( tasks => {
      console.log(tasks);
    });
  }

  getTask() {
    this.taskService.getTask('2').subscribe( task => {
      console.log(task);
    });
  }

  createTask() {
      const task = {
        userId: '9999',
        title: 'change title',
        completed: true
      };

      this.taskService.createTask(task).subscribe ( (newTask) => {
          console.log(newTask);
      });
  }

  updateTask() {
    const task = {
      id: '200',
      userId: '88',
      title: 'change title 2',
      completed: true
    };
    this.taskService.updateTask(task).subscribe ( (updateTask) => {
        console.log(updateTask);
    });
  }

  deleteTask() {
      const id = '200';
      this.taskService.deleteTask(id).subscribe ( deleteTask => {
        console.log(deleteTask);
      });
  }

}
