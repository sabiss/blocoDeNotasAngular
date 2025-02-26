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
  notasArquivadas: boolean = false;

  selecionar(tipoNota: 'todas' | 'arquivadas') {
    if (tipoNota == 'todas') {
      this.todasNotasSelecionado = true;
      this.notasArquivadas = false;
    } else {
      this.todasNotasSelecionado = false;
      this.notasArquivadas = true;
    }
    this.tipoDeNotaSelecionada.emit(tipoNota);
  }
}
