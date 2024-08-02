import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>()

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddTask: boolean = false;


  onSubmit(){
    if(!this.tarefa) {
      alert("Adicione uma tarefa!");
      return;
    }

    const novaTarefa: Tarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);
    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }

  alteraVisualizacao(valor: boolean) {
    this.mostrarAddTask = valor;
  }
}
