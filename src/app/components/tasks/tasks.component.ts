import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tarefas: Tarefa[] = [];

  // Injeção de dependência.
  constructor(private taskService: TaskService){ }

  /**
   * Método da implementação 'OnInit'
   * Executa sempre que inicializar o component.
   */
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((listaDeItens) => {
      this.tarefas = listaDeItens;
      console.log(this.tarefas);
    });
  }

  deleteTask(item: Tarefa){
    this.taskService.deleteTask(item).subscribe(() =>
      this.tarefas = this.tarefas.filter((t) => t.id != item.id)
    );
  }

  toggleDone(item: Tarefa){
    item.concluido = !item.concluido;
    this.taskService.updateTask(item).subscribe();
  }

  addTask(item: Tarefa) {
    this.taskService.addTask(item).subscribe((tarefa) => this.tarefas.push(tarefa));
  }
}
