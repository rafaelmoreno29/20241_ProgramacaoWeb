import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css'],
})
export class InserirUsuarioComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  submitForm(form: any) {
    this.usuarioService.postUsuario(form.value).subscribe((data) => {
      console.log('Salvo com sucesso!');
    });
  }
}
