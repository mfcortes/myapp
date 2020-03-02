import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllTask(){
      const path = `${this.api}`;

      return this.http.get<Task[]>(path);

  }

  getTask(id: string){
     const path = `${this.api}/${id}`;

     return this.http.get<Task>(path);
  }

  createTask(task: Task){
      const path = `${this.api}`;

      return this.http.post(path, task);
  }

  updateTask(task: Task){
      const path = `${this.api}/${task.id}`;
      return this.http.put<Task>(path, task);
  }

  deleteTask(id: string){
    const path = `${this.api}/${id}`;
    return this.http.delete(path);
  }
}
