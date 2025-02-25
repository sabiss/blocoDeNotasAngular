import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botoes-selecao-tipo-nota',
  standalone: false,

  templateUrl: './botoes-selecao-tipo-nota.component.html',
  styleUrl: './botoes-selecao-tipo-nota.component.scss',
})
export class BotoesSelecaoTipoNotaComponent {
  @Output() tipoDeNotaSelecionada = new EventEmitter<string>();
  todasNotasSelecionado: boolean = true;

  selecionar(tipoNota: 'todas' | 'arquivadas') {
    this.todasNotasSelecionado = !this.todasNotasSelecionado;
    this.tipoDeNotaSelecionada.emit(tipoNota);
  }
}
