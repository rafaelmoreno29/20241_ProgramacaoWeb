import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuario() {
    return this.http.get(environment.urlApi + 'api/v1/usuario');
  }
  postUsuario(usuario: any) {
    return this.http.post(`${environment.urlApi}api/v1/usuario`, usuario);
  }
}
