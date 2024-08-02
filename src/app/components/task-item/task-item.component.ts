import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],   // Add módulos que serem carregados no HTML.
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  /**
   *  Recebendo objeto do 'task.component'.
   *  Não precisa inicializar a variável pois a informação vai chegar via '@Input()'.
   */
  @Input() item!: Tarefa;

  @Output() onDeleteTask = new EventEmitter<Tarefa>();  // Enviando objeto ao component pai (task.component).

  @Output() onToggleDone = new EventEmitter<Tarefa>();

  faTimes = faTimes;  // Implementação de Icon a partir da dependência do Angular Font Awesome.

  onDelete(item: Tarefa){
    this.onDeleteTask.emit(item);
  }

  onToggle(item: Tarefa){
    this.onToggleDone.emit(item);
  }
}
