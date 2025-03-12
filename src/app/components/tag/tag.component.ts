import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: false,

  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input({ required: true }) listaTags: string[] = [];
  @Output() tagParaFiltrar = new EventEmitter<string>();

  enviarTagSelecionada(tag: string) {
    this.tagParaFiltrar.emit(tag);
  }
}
