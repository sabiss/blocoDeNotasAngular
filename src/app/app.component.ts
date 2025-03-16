import { Component, HostListener, ElementRef } from '@angular/core';
import { INota } from './interfaces/nota';
import { ListaNotas } from './data/lista-notas';
import { ListaDeTags } from './data/lista-tags';
import { alterarTextoHeader } from './utils/header/texto-header';
import { AcaoNota } from './interfaces/acao-nota';
import { NotaService } from './services/nota/nota.service';
import { TelaService } from './services/tela/tela.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private notaService: NotaService,
    private telaService: TelaService
  ) {}

  listaDeNotas: INota[] = ListaNotas;
  listaDeTags: string[] = ListaDeTags;

  listaDeNotasNaoArquivadas: INota[] = this.listaDeNotas.filter(
    (nota) => nota.arquivada === false && !nota.excluida
  );
  listaDeNotasParaExibir: INota[] = this.listaDeNotasNaoArquivadas;

  textoDoHeader: string = '';
  navbarAberta: boolean = false;
  formsAberto: boolean = false;
  detalhesAberto: boolean = false;
  notasAmostra: boolean = true;
  botaoCriarNota: boolean = true;

  detalhesDaNota: INota = {} as INota;

  tipoDeNotaExibidaNoMomento: 'arquivadas' | 'nao arquivadas' =
    'nao arquivadas';

  changeForm(status: boolean) {
    this.formsAberto = status;
    this.changeNavNotas(!status);
    // if (!this.telaService.telaPequena()) {
    //   this.changeDetalhes(!status);
    // }
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
    if (this.telaService.telaPequena()) {
      this.changeNavNotas(!status);
      this.changeBotaoCriarNota(!status);
    }
  }
  filtrarPorTipo(tipoDeNota: 'arquivadas' | 'nao arquivadas') {
    this.tipoDeNotaExibidaNoMomento = tipoDeNota; //vai ser usado na função de pesquisa, para saber se a pesquisar deve procurar nas notas arquivadas ou não arquivadas
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
      this.listaDeNotas,
      this.tipoDeNotaExibidaNoMomento
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
      this.listaDeNotas,
      this.tipoDeNotaExibidaNoMomento
    );
  }
  arquivarDesarquivarOuExcluirNota(acaoNota: AcaoNota) {
    switch (acaoNota.acao) {
      case 'arquivar':
        this.listaDeNotas = this.notaService.arquivarNota(
          acaoNota.nota,
          this.listaDeNotas
        );
        this.atualizarNotas();
        this.changeDetalhes(false);
        break;

      case 'desarquivar':
        this.listaDeNotasParaExibir = this.notaService.desarquivarNota(
          acaoNota.nota,
          this.listaDeNotas
        );
        this.changeDetalhes(false);
        break;

      case 'excluir':
        this.listaDeNotasParaExibir = this.notaService.excluirNota(
          acaoNota.nota,
          this.tipoDeNotaExibidaNoMomento,
          this.listaDeNotas
        );
        this.changeDetalhes(false);
        break;
    }
  }
  atualizarNotas() {
    this.listaDeNotasNaoArquivadas = this.listaDeNotas.filter(
      (nota) => nota.arquivada === false && !nota.excluida
    );
    this.listaDeNotasParaExibir = this.listaDeNotasNaoArquivadas;
  }
}
