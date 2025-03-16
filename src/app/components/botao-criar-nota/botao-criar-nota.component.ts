import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TelaService } from '../../services/tela/tela.service';

@Component({
  selector: 'app-botao-criar-nota',
  standalone: false,

  templateUrl: './botao-criar-nota.component.html',
  styleUrl: './botao-criar-nota.component.scss',
})
export class BotaoCriarNotaComponent {
  @Output() mudarStatusForm = new EventEmitter<boolean>();
  @Input() formsAberto: boolean = false;

  changeBotaoCriar: boolean = true;

  constructor(private telaService: TelaService) {}

  abrirForms() {
    const telaPequena = this.telaService.telaPequena();
    if (telaPequena) {
      this.changeBotaoCriar = false;
    }
    this.formsAberto = true;
    this.mudarStatusForm.emit(true);
  }
}
