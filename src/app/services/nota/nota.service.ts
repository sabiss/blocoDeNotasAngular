import { Injectable } from '@angular/core';
import { INota } from '../../interfaces/nota';
import { ListaNotas } from '../../data/lista-notas';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  constructor() {}

  filtrarNotaPorTipo = (
    tipo: 'nao arquivadas' | 'arquivadas',
    listaDeNotas: INota[]
  ) => {
    if (tipo === 'arquivadas') {
      return listaDeNotas.filter((nota) => nota.arquivada && !nota.excluida);
    } else {
      return listaDeNotas.filter((nota) => !nota.arquivada && !nota.excluida);
    }
  };

  filtrarNotaPorTag = (
    tag: string,
    listaDeNotas: INota[],
    tipoDeNotaExibidaNoMomento: 'nao arquivadas' | 'arquivadas'
  ) => {
    const listaParaTrabalho = this.filtrarNotaPorTipo(
      tipoDeNotaExibidaNoMomento,
      listaDeNotas
    );
    const listaFiltrada = listaParaTrabalho.filter((nota) =>
      nota.tags.includes(tag)
    );
    return listaFiltrada;
  };

  pesquisaDeNotas = (
    palavra: string,
    listaDeNotas: INota[],
    tipoDeNotaParaPesquisar: 'nao arquivadas' | 'arquivadas'
  ) => {
    const listaParaPesquisa = this.filtrarNotaPorTipo(
      tipoDeNotaParaPesquisar,
      listaDeNotas
    );

    const listaFiltrada = listaParaPesquisa.filter((nota) => {
      return (
        nota.titulo.toLowerCase().includes(palavra.toLowerCase()) ||
        nota.texto.toLowerCase().includes(palavra.toLowerCase())
      );
    });
    return listaFiltrada;
  };

  arquivarNota = (notaParaArquivar: INota, listaDeNotas: INota[]) => {
    for (let nota of listaDeNotas) {
      if (nota == notaParaArquivar) {
        nota.arquivada = true;
      }
    }
    return listaDeNotas;
  };

  excluirNota = (
    notaParaExcluir: INota,
    tipoDeNotaExibidaNoMomento: 'nao arquivadas' | 'arquivadas',
    listaDeNotas: INota[]
  ) => {
    const listaDeTrabalho = this.filtrarNotaPorTipo(
      tipoDeNotaExibidaNoMomento,
      listaDeNotas
    ); //trabalhar com o tipo de nota atual que o user está vendo
    for (let nota of listaDeTrabalho) {
      if (nota === notaParaExcluir) {
        nota.excluida = true;
      }
    }
    const notasNaoExcluidas = listaDeTrabalho.filter((nota) => !nota.excluida); //não exibir mais a excluída
    console.log(notasNaoExcluidas);
    return notasNaoExcluidas;
  };

  desarquivarNota = (notaParaDesarquivar: INota, listaDeNotas: INota[]) => {
    for (let nota of listaDeNotas) {
      if (nota === notaParaDesarquivar) {
        nota.arquivada = false;
      }
    }
    const listaNotasArquivadas = this.filtrarNotaPorTipo(
      'arquivadas',
      listaDeNotas
    );
    return listaNotasArquivadas; //retorna as arquivadas, pois so é possível desarquivar uma nota na aba de "notas arquivadas", então retorno as arquivadas para mostrar na navBar o restante das notas arquivadas
  };
  adicionarNota = (notaParaAdicionar: INota, listaDeNotas: INota[]) => {
    listaDeNotas.unshift(notaParaAdicionar);
    return listaDeNotas;
  };
}
