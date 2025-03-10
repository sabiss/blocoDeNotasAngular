import { INota } from '../../interfaces/nota';

export const filtrarNotaPorTipo = (
  tipo: 'nao arquivadas' | 'arquivadas',
  listaDeNotas: INota[]
) => {
  if (tipo === 'arquivadas') {
    return listaDeNotas.filter((nota) => nota.arquivada);
  } else {
    return listaDeNotas;
  }
};

export const filtrarNotaPorTag = (tag: string, listaDeNotas: INota[]) => {
  const listaFiltrada = listaDeNotas.filter(
    (nota) => nota.tags.includes(tag) && nota.arquivada === false
  );
  return listaFiltrada;
};
