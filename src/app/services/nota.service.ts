import { Injectable } from '@angular/core';
import { INota } from '../interfaces/nota';
import { ListaNotas } from '../data/lista-notas';

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
      return listaDeNotas.filter((nota) => nota.arquivada);
    } else {
      return listaDeNotas.filter((nota) => nota.arquivada === false);
    }
  };

  filtrarNotaPorTag = (tag: string, listaDeNotas: INota[]) => {
    const listaFiltrada = listaDeNotas.filter(
      (nota) => nota.tags.includes(tag) && !nota.arquivada
    );
    return listaFiltrada;
  };

  pesquisaDeNotas = (palavra: string, listaDeNotas: INota[]) => {
    const listaFiltrada = listaDeNotas.filter((nota) => {
      return (
        ((nota.titulo.toLowerCase().includes(palavra.toLowerCase()) &&
          !nota.arquivada) ||
          nota.texto.toLowerCase().includes(palavra.toLowerCase())) &&
        !nota.arquivada
      );
    });
    return listaFiltrada;
  };

  arquivarNota = (nota: INota, listaDeNotas: INota[]) => {
    listaDeNotas.filter((notaDaLista) => {
      if (notaDaLista === nota) {
        notaDaLista.arquivada = true;
      }
    });

    const novaLista = this.excluirNota(nota);
    return novaLista;
  };

  excluirNota = (nota: INota) => {
    return ListaNotas.filter((notaDaLista) => notaDaLista != nota);
  };

  desarquivarNota = (nota: INota, listaDeNotas: INota[]) => {
    listaDeNotas.filter((notaDaLista) => {
      if (notaDaLista === nota) {
        notaDaLista.arquivada = false;
      }
    });
    return listaDeNotas;
  };
}
