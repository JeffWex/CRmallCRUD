import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/share/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public service : ClienteService, private toastr : ToastrService) { }

  ngOnInit() {    
    this.resetForm();
  }
  
  resetForm(form? : NgForm){
    if(form != null )
    form.resetForm();
    this.service.formData = {
      ID : null,
      Nome : '',
      DataNascimento : null,
      Sexo : '',
      Cep : '',
      Endereco : '',
      Numero: '',
      Complemento : '',      
      Bairro : '',
      Estado : '',
      Cidade : ''      
    }
  }

  onSubmit(form : NgForm){
    this.IncluirCadastro(form);    
  }
  IncluirCadastro(form : NgForm){
    this.service.postCliente(form.value).subscribe(reset => {
      this.toastr.success('Incluído com sucesso!', 'Item')
    this.resetForm(form)
    });
  }
  AtualizaCadastro(form : NgForm){
    this.service.putCliente(form.value).subscribe(reset => {
      this.toastr.success('Incluído com sucesso!', 'Item')
    this.resetForm(form)
    });
  }
  
  consultaCep(valor, formulario){
    debugger;
    this.service.buscarCep(valor).subscribe((dados) => this.DadosForm(dados, formulario));
  }

  DadosForm(dados,formulario){
    debugger;
    formulario.setValue({      
      Nome : '',
      DataNascimento : '',
      Sexo : '',
      Cep: dados.cep,      
      Endereco: dados.logradouro,
      Numero: '',
      Bairro: dados.bairro,
      Complemento: dados.complemento,
      Cidade: dados.localidade,
      Estado: dados.uf
    })
  } 
}
