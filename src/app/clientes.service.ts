import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente() : Cliente{
    let cliente: Cliente = new Cliente();
    cliente.nome = "Fulano de Tal";
    cliente.cpf = "88888888888";

    return cliente;
  }

  getClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getClientes2() : Cliente[]{
    let clientes: Cliente[] = [];

    let cliente: Cliente = new Cliente();
    cliente.nome = "Fulano de Tal";
    cliente.cpf = "88888888888";
    clientes.push(cliente);

    let cliente2: Cliente = new Cliente();
    cliente2.nome = "Ciclano de Tal";
    cliente2.cpf = "99999999999";
    clientes.push(cliente2);

    return clientes;
  
  }
}
