import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tipoDeNotaParaExibir: string = '';

  enviarTipoDeNotasParaExibir(tag: string) {
    console.log(tag);
    this.tipoDeNotaParaExibir = tag;
  }
}
