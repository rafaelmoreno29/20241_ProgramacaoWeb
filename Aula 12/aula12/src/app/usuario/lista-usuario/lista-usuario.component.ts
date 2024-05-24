import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: any = [];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
