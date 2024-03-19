import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiUrlBase + '/api/usuarios';
  constructor(
    private http: HttpClient
  ){ }

  salvar(usuario: Usuario) : Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }
}
