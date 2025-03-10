import { Component, EventEmitter, Output } from '@angular/core';
import { ListaDeTags } from '../../data/lista-tags';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() tipoDeNotaSelecionada = new EventEmitter<
    'nao arquivadas' | 'arquivadas'
  >();
  @Output() fecharMenu = new EventEmitter<boolean>();
  @Output() tagParaFiltragemDeNotas = new EventEmitter<string>();

  tipoDeNotaParaFiltrar: 'nao arquivadas' | 'arquivadas' = 'nao arquivadas';

  listaTags: string[] = ListaDeTags; //essa lista so será usada no component TAG, filho de navbar, portanto, é melhor mantê-la aqui do que no AppComponent

  enviarTipoDeNotaSelecionadaParaExibir(
    tipoDeNota: 'nao arquivadas' | 'arquivadas'
  ) {
    this.tipoDeNotaSelecionada.emit(tipoDeNota);
  }
  enviarTagParaFiltragemDeNotas(tag: string) {
    this.tagParaFiltragemDeNotas.emit(tag);
  }
}
