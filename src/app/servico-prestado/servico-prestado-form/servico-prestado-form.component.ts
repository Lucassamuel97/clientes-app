import { Component } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css'
})

export class ServicoPrestadoFormComponent {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(private clienteService: ClientesService){
    this.servico = new ServicoPrestado();
  }
   
  ngOnInit(){
    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response);
  }

  onSubmit(){
    console.log("Submit!");
  }
}
