import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INota } from '../../interfaces/nota';

@Component({
  selector: 'app-forms',
  standalone: false,

  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  @Input() tagsExistentes: string[] = [];
  @Output() enviarNotaParaLista = new EventEmitter<INota>();
  @Output() fecharForms = new EventEmitter<boolean>();

  tituloNota: string = '';
  textoNota: string = '';
  dataNota: Date = new Date();
  tagsSelecionadas: string[] = []; // Variável para armazenar o item selecionado

  toggleTag(tag: string) {
    const index = this.tagsSelecionadas.indexOf(tag);
    if (index === -1) {
      //a tag marcada ainda não estava no array, portanto, é adicionada
      this.tagsSelecionadas.push(tag);
    } else {
      //o usuário desmarcou uma tag que antes estava marcada, então a tag é removida do array
      this.tagsSelecionadas.splice(index, 1);
    }
  }

  isChecked(tag: string): boolean {
    //marca a tag se ela estiver no array das tags selecionadaas
    return this.tagsSelecionadas.includes(tag);
  }

  criarNota() {
    if (
      this.tituloNota == '' ||
      this.textoNota == '' ||
      this.tagsSelecionadas.length == 0
    ) {
      alert('Preenchar todos os campos da nota!');
    } else {
      const nota: INota = {
        titulo: this.tituloNota,
        texto: this.textoNota,
        tags: this.tagsSelecionadas,
        data: this.dataNota,
        arquivada: false,
        excluida: false,
      };

      this.enviarNotaParaLista.emit(nota);
      this.fecharForms.emit(false);
    }
  }
  fechar() {
    this.fecharForms.emit(false);
  }
}
