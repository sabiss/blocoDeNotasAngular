export const alterarTextoHeader = (texto: 'nao arquivadas' | 'arquivadas') => {
  switch (texto) {
    case 'nao arquivadas':
      return 'Todas as Notas';
      break;
    case 'arquivadas':
      return 'Notas Arquivadas';
      break;
  }
};
