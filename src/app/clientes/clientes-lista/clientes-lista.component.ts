import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent {
  clientes: Cliente[] = [];
  clienteSelecionado!: Cliente;
  mensageSuccess!: string;
  mensagemErro!: string;

  constructor(
    private service: ClientesService, 
    private router: Router) {}

  ngOnInit() {
    this.service.getClientes().subscribe(response => this.clientes = response);
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service.deletar(this.clienteSelecionado)
      .subscribe(response => {
        this.mensageSuccess = 'Cliente deletado com sucesso!'
        this.ngOnInit();
      },
       erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
      );
  }
}
