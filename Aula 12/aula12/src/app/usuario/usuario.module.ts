import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListaUsuarioComponent],
})
export class UsuarioModule {}
