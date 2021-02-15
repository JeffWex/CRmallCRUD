import { Injectable } from '@angular/core';
import { Cliente } from './cliente.models';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  formData : Cliente;
  lista : Cliente[];
  readonly rootURL = "http://localhost:65471/Clientes"

  constructor(private http : HttpClient) { }

    postCliente(formData : Cliente){
      return this.http.post(this.rootURL+'/Create', formData)
    }
    buscarCep(cep:string){
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      }
    recarregarLista(){
      return this.http.get(this.rootURL+'/Listagem').toPromise()
        .then(res => {
          this.lista = res as Cliente[];          
        } );
    }

    putCliente(formData : Cliente){
      return this.http.put(this.rootURL+'/Edit/'+formData.ID, formData)
    }

    DeleteCliente(id : number){
    return this.http.delete(this.rootURL+'/DeleteConfirmed/'+id);
    }

    }
    
  
  

