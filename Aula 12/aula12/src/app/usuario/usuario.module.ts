import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ListaUsuarioComponent],
})
export class UsuarioModule {}
