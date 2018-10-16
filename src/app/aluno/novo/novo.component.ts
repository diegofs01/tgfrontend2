import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public aluno: Aluno;
  public cursos: Array<Curso>;

  public estados = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
    // tslint:disable-next-line:max-line-length
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins',
  ];

  constructor(
    private alunoService: AlunoService,
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.aluno = {} as Aluno;
    this.cursoService.lista().subscribe((response: Array<Curso>) => {
      this.cursos = response;
    });
  }

  salvar() {
    console.log(this.aluno);
    this.alunoService.salvar(this.aluno)
    .subscribe(() => {
      this.router.navigate(['/aluno/lista']);
    });
  }

  limparCampos() {
    this.aluno = {} as Aluno;
  }

}
