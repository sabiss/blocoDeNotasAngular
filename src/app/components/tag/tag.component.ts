import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: false,

  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input({ required: true }) listaTags: string[] = [];

  enviarTagSelecionada(tag: string) {}
}
