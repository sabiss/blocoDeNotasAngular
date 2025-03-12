import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-criar-nota',
  standalone: false,

  templateUrl: './botao-criar-nota.component.html',
  styleUrl: './botao-criar-nota.component.scss',
})
export class BotaoCriarNotaComponent {
  @Output() mudarStatusForm = new EventEmitter<boolean>();
  @Input() formsAberto: boolean = false;

  abrirForms() {
    this.formsAberto = true;
    this.mudarStatusForm.emit(true);
  }
}
