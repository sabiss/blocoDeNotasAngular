import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botoes-selecao-tipo-nota',
  standalone: false,

  templateUrl: './botoes-selecao-tipo-nota.component.html',
  styleUrl: './botoes-selecao-tipo-nota.component.scss',
})
export class BotoesSelecaoTipoNotaComponent {
  @Output() tipoDeNotaSelecionada = new EventEmitter<
    'nao arquivadas' | 'arquivadas'
  >();
  notasNaoArquivadas: boolean = true;
  notasArquivadas: boolean = false;

  selecionar(tipoNota: 'nao arquivadas' | 'arquivadas') {
    if (tipoNota == 'nao arquivadas') {
      this.notasNaoArquivadas = true;
      this.notasArquivadas = false;
    } else {
      this.notasNaoArquivadas = false;
      this.notasArquivadas = true;
    }
    this.tipoDeNotaSelecionada.emit(tipoNota);
  }
}
