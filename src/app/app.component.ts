import { Component, DoCheck } from '@angular/core';
import { INota } from './interfaces/nota';
import { ListaNotas } from './data/lista-notas';
import { ListaDeTags } from './data/lista-tags';
import { alterarTextoHeader } from './utils/header/texto-header';
import { AcaoNota } from './interfaces/acao-nota';
import { NotaService } from './services/nota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private notaService: NotaService) {}
  listaDeNotas: INota[] = ListaNotas;
  listaDeNotasNaoArquivadas: INota[] = this.listaDeNotas.filter(
    (nota) => nota.arquivada === false
  );
  listaDeNotasParaExibir: INota[] = this.listaDeNotasNaoArquivadas;

  listaDeTags: string[] = ListaDeTags;

  textoDoHeader: string = '';
  navbarAberta: boolean = false;
  formsAberto: boolean = false;
  detalhesAberto: boolean = false;
  notasAmostra: boolean = true;
  botaoCriarNota: boolean = true;

  detalhesDaNota: INota = {} as INota;

  changeForm(status: boolean) {
    this.formsAberto = status;
    this.changeNavNotas(!status);
  }
  changeNavbar(status: boolean) {
    this.navbarAberta = status;
    this.changeBotaoCriarNota(!status);
  }
  changeBotaoCriarNota(status: boolean) {
    this.botaoCriarNota = status;
  }
  changeNavNotas(status: boolean) {
    this.notasAmostra = status;
  }
  changeDetalhes(status: boolean) {
    this.detalhesAberto = status;
    this.changeNavNotas(!status);
    this.changeBotaoCriarNota(!status);
  }
  filtrarPorTipo(tipoDeNota: 'nao arquivadas' | 'arquivadas') {
    this.definirTextoDoHeader(tipoDeNota);
    this.listaDeNotasParaExibir = this.notaService.filtrarNotaPorTipo(
      tipoDeNota,
      this.listaDeNotas
    );
    this.changeNavbar(false);
  }
  filtrarPorTag(tag: string) {
    this.listaDeNotasParaExibir = this.notaService.filtrarNotaPorTag(
      tag,
      this.listaDeNotas
    );
    this.changeNavbar(false);
  }
  definirTextoDoHeader(texto: 'nao arquivadas' | 'arquivadas') {
    this.textoDoHeader = alterarTextoHeader(texto);
  }
  adicionarNota(nota: INota) {
    this.listaDeNotasParaExibir = this.notaService.adicionarNota(
      nota,
      this.listaDeNotas
    );
  }
  mostrarDetalhesDaNota(nota: INota) {
    this.detalhesDaNota = nota;
    this.changeDetalhes(true);
  }
  pesquisarPorNota(textoDePesquisa: string) {
    this.listaDeNotasParaExibir = this.notaService.pesquisaDeNotas(
      textoDePesquisa,
      this.listaDeNotas
    );
  }
  arquivarDesarquivarOuExcluirNota(acaoNota: AcaoNota) {
    switch (acaoNota.acao) {
      case 'arquivar':
        this.listaDeNotas = this.notaService.arquivarNota(
          acaoNota.nota,
          this.listaDeNotas
        );
        this.atualizarNotasArquivadas();
        break;

      case 'desarquivar':
        this.listaDeNotasParaExibir = this.notaService.desarquivarNota(
          acaoNota.nota,
          this.listaDeNotas
        );
        console.log(
          this.notaService.desarquivarNota(acaoNota.nota, this.listaDeNotas)
        );
        break;

      case 'excluir':
        this.listaDeNotas,
          (this.listaDeNotasParaExibir = this.notaService.excluirNota(
            acaoNota.nota
          ));
        this.atualizarNotasArquivadas();
        break;
    }
  }
  atualizarNotasArquivadas() {
    this.listaDeNotasNaoArquivadas = this.listaDeNotas.filter(
      (nota) => nota.arquivada === false
    );
    this.listaDeNotasParaExibir = this.listaDeNotasNaoArquivadas;
  }
}
