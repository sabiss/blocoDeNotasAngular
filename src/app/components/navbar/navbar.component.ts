import { Component, EventEmitter, Output } from '@angular/core';
import { ListaDeTags } from '../../data/lista-tags';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() tipoDeNotaSelecionada = new EventEmitter<string>();
  listaTags: string[] = ListaDeTags; //essa lista so será usada no component TAG, filho de navbar, portanto, é melhor mantê-la aqui do que no AppComponent
  enviarTipoDeNotaSelecionadaParaExibir(tag: string) {
    this.tipoDeNotaSelecionada.emit(tag);
  }
}
