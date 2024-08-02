import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Fake api com Json-Server. Dados contidos no arquivo raíz 'db.json'.
  private apiURL = "http://localhost:3000/tasks";

  // Injeção de dependência na classe.
  constructor(private http: HttpClient) { }

  // GET Request a partir da 'apiURL'.
  getTasks(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiURL);
  }

  deleteTask(item: Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiURL}/${item.id}`);
  }

  updateTask(item: Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.apiURL}/${item.id}`, item);
  }

  addTask(item: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.apiURL}`, item);
  }
}
