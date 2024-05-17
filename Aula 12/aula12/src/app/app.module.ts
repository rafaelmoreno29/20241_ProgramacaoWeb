import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ApoliceComponent } from './apolice/apolice.component';
import { FormsModule } from '@angular/forms';
import { ExemploDiretivaComponent } from './exemplo-diretiva/exemplo-diretiva.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilha1Component } from './tela-pai/tela-filha1/tela-filha1.component';
import { TelaFilha2Component } from './tela-pai/tela-filha2/tela-filha2.component';

@NgModule({
  declarations: [AppComponent, MenuSuperiorComponent, ApoliceComponent, ExemploDiretivaComponent, PaginaNaoEncontradaComponent, TelaPaiComponent, TelaFilha1Component, TelaFilha2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UsuarioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
