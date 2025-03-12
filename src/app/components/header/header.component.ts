import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() texto: string = '';
  @Input() menuAberto: boolean = false;

  @Output() sinalizarAbertudaNav = new EventEmitter<boolean>();
  @Output() textoParaPesquisa = new EventEmitter<string>();

  textoDePesquisa: string = '';

  toogleMenu() {
    this.menuAberto = !this.menuAberto;
    this.sinalizarAbertudaNav.emit(this.menuAberto);
  }

  ngOnInit(): void {
    if (!this.texto) {
      this.texto = 'Todas as Notas';
    }
  }

  pesquisar() {
    this.textoParaPesquisa.emit(this.textoDePesquisa);
  }
}
