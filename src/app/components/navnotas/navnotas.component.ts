import { Component, Input } from '@angular/core';
import { INota } from '../../interfaces/nota';

@Component({
  selector: 'app-navnotas',
  standalone: false,

  templateUrl: './navnotas.component.html',
  styleUrl: './navnotas.component.scss',
})
export class NavnotasComponent {
  @Input() listaDeNotasParaExibir: INota[] = [];
}
