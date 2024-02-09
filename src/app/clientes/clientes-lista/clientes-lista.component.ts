import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent {
  clientes: Cliente[] = [];

  constructor(private service: ClientesService, private router: Router) {
  }

  ngOnInit() {
    this.service.getClientes().subscribe(response => this.clientes = response);
  }
}
