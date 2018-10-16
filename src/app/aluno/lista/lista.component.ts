import { Component, OnInit } from '@angular/core';

import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  private alunos: Array<Aluno> = [];
  private aluno = {};

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.lista();
  }

  lista() {
    this.alunoService.lista()
    .subscribe((data: Array<Aluno>) => {
      this.alunos = data;
      console.log(data);
    });
  }

}
