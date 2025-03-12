import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INota } from '../../interfaces/nota';
import { AcaoNota } from '../../interfaces/acao-nota';

@Component({
  selector: 'app-detalhes',
  standalone: false,

  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent {
  @Input() notaParaExibirDetalhes: INota = {} as INota;
  @Output() fecharDetalhes = new EventEmitter<boolean>();
  @Output() arquivarDesarquivarOuExcluirNota = new EventEmitter<AcaoNota>();

  fechar() {
    this.fecharDetalhes.emit(false);
  }
  rolarPraCima() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  processarNota(acao: string, nota: INota) {
    this.arquivarDesarquivarOuExcluirNota.emit({ acao: acao, nota: nota });
  }
}
