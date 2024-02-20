import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
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

}
