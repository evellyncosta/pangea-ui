import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-pesquisa',
  templateUrl: './alunos-pesquisa.component.html',
  styleUrls: ['./alunos-pesquisa.component.css']
})
export class AlunosPesquisaComponent  {
  alunos = [
    { nome: 'TESTE', telefone: '9999999', turma: 'PRIMÁRIO',
      dataNascimento: '30/06/2017', responsavel: 'joao'},
    { nome: 'TESTE', telefone: '9999999', turma: 'PRIMÁRIO',
      dataNascimento: '30/06/2017', responsavel: 'joao'},
    { nome: 'TESTE', telefone: '9999999', turma: 'PRIMÁRIO',
      dataNascimento: '30/06/2017', responsavel: 'joao'},
    { nome: 'TESTE', telefone: '9999999', turma: 'PRIMÁRIO',
      dataNascimento: '30/06/2017', responsavel: 'joao'},
    { nome: 'TESTE', telefone: '9999999', turma: 'PRIMÁRIO',
      dataNascimento: '30/06/2017', responsavel: 'joao'},
  ];

}
