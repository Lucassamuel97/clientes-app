import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
    this.errors = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params && params['id']){
        this.service
          .getClienteById(params['id'])
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
          );
      }
    });
  }

  onSubmit(){
    if(this.cliente.id){
      this.service.atualizar(this.cliente).subscribe(response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }else{
      this.service.salvar(this.cliente).subscribe(response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }
  }

  clicar(){
    console.log(this.cliente);
  }
}
