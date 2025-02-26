import { Component, Input } from '@angular/core';
import { INota } from '../../interfaces/nota';

@Component({
  selector: 'app-detalhes',
  standalone: false,

  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent {
  @Input() notaParaExibirDetalhes: INota = {} as INota;
}
