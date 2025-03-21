import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BotaoCriarNotaComponent } from './botao-criar-nota/botao-criar-nota.component';
import { HeaderComponent } from './header/header.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavnotasComponent } from './navnotas/navnotas.component';
import { NotaComponent } from './nota/nota.component';
import { BotoesSelecaoTipoNotaComponent } from './botoes-selecao-tipo-nota/botoes-selecao-tipo-nota.component';
import { TagComponent } from './tag/tag.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    BotaoCriarNotaComponent,
    HeaderComponent,
    DetalhesComponent,
    BotaoCriarNotaComponent,
    HeaderComponent,
    NavbarComponent,
    NavnotasComponent,
    NotaComponent,
    BotoesSelecaoTipoNotaComponent,
    TagComponent,
    FormsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    BotaoCriarNotaComponent,
    HeaderComponent,
    DetalhesComponent,
    BotaoCriarNotaComponent,
    HeaderComponent,
    NavbarComponent,
    NavnotasComponent,
    NotaComponent,
    BotoesSelecaoTipoNotaComponent,
    TagComponent,
    FormsComponent,
  ],
})
export class ComponentsModule {}
