import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() tipoDeNotasExibidas: string = '';

  ngOnInit(): void {
    if (!this.tipoDeNotasExibidas) {
      this.tipoDeNotasExibidas = 'todas';
    }
  }
}
