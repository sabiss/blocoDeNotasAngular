import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoCriarNotaComponent } from './botao-criar-nota/botao-criar-nota.component';
import { HeaderComponent } from './header/header.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavnotasComponent } from './navnotas/navnotas.component';
import { NotaComponent } from './nota/nota.component';
import { BotoesacoesComponent } from './botoesacoes/botoesacoes.component';

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
    BotoesacoesComponent,
  ],
  imports: [CommonModule],
  exports: [
    BotaoCriarNotaComponent,
    HeaderComponent,
    DetalhesComponent,
    BotaoCriarNotaComponent,
    HeaderComponent,
    NavbarComponent,
    NavnotasComponent,
    NotaComponent,
    BotoesacoesComponent,
  ],
})
export class ComponentsModule {}
