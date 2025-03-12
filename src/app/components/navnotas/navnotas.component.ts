import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INota } from '../../interfaces/nota';

@Component({
  selector: 'app-navnotas',
  standalone: false,

  templateUrl: './navnotas.component.html',
  styleUrl: './navnotas.component.scss',
})
export class NavnotasComponent {
  @Input() listaDeNotasParaExibir: INota[] = [];
  @Output() notaSelecionada = new EventEmitter<INota>();

  enviarNota(nota: INota) {
    this.notaSelecionada.emit(nota);
  }
}
