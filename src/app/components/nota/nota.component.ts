import { Component, Input, Output, EventEmitter } from '@angular/core';
import { INota } from '../../interfaces/nota';

@Component({
  selector: 'app-nota',
  standalone: false,

  templateUrl: './nota.component.html',
  styleUrl: './nota.component.scss',
})
export class NotaComponent {
  @Input() listaDeNotasParaExibir: INota[] = [];
  @Output() notaParaExibirDetalher = new EventEmitter<INota>();

  selecionarNota(nota: INota) {
    this.notaParaExibirDetalher.emit(nota);
  }
}
