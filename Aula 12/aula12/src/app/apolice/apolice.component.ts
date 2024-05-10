import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css'],
})
export class ApoliceComponent implements OnInit {
  valorApolice: number = 0;
  constructor() {}

  ngOnInit(): void {}
  submitForm(form: any) {
    debugger;
    if (form.value.sexo == 'M' && form.value.idade <= 25) {
      this.valorApolice = form.value.valorAutomovel * 0.15;
    } else if (form.value.sexo == 'M' && form.value.idade > 25) {
      this.valorApolice = form.value.valorAutomovel * 0.1;
    } else {
      this.valorApolice = form.value.valorAutomovel * 0.08;
    }
  }
}
