import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-diretiva',
  templateUrl: './exemplo-diretiva.component.html',
  styleUrls: ['./exemplo-diretiva.component.css'],
})
export class ExemploDiretivaComponent implements OnInit {
  mostrarTabela: boolean = false;
  apolices: any = [
    { nome: 'João', idade: 20, sexo: 'M', valorAutomovel: 10000 },
    { nome: 'Pedro', idade: 21, sexo: 'M', valorAutomovel: 20000 },
    { nome: 'Maria', idade: 22, sexo: 'F', valorAutomovel: 30000 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
