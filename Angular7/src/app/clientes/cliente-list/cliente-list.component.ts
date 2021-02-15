import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/share/cliente.models';
import { ClienteService } from 'src/app/share/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(public service : ClienteService) { }

  ngOnInit(){
    this.service.recarregarLista();
  } 

  popForm(item : Cliente){    
   this.service.formData = Object.assign({}, item);
  }

  onDelete(id: number){
    if(confirm('Tem certeza que deseja deletar este registro?'))
    this.service.DeleteCliente(id).subscribe(res =>{
      this.service.recarregarLista();
    })
  }
}