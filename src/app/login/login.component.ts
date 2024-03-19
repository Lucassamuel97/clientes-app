import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginError: boolean = false;
  cadastrando: boolean = false;
  mensagemSucesso: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log('username:', this.username);
    console.log('password:', this.password);
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event: any) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario : Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe(response => {
        this.mensagemSucesso = true;
        this.loginError = false;
      }, error =>{
        this.loginError = true;
        this.mensagemSucesso = false;
      }); 
  }
}
