import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ApoliceComponent } from './apolice/apolice.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MenuSuperiorComponent, ApoliceComponent],
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
