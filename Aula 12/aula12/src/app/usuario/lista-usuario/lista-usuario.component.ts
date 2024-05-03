import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
})
export class ListaUsuarioComponent implements OnInit {
  titulo: string = 'Lista de Usuários';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  constructor() {}

  ngOnInit(): void {}

  somar() {
    this.resultado = this.numero1 + this.numero2;
  }
}
