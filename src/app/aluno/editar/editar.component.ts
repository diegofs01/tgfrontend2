import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunoService } from '../../services/aluno.service';
import { Aluno } from 'src/app/models/aluno';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private sub: any;
  public aluno: Aluno;
  public cursos: Curso[];

  public estados = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
    // tslint:disable-next-line:max-line-length
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins',
  ];

  constructor(
    private alunoService: AlunoService,
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.aluno = {} as Aluno;
    this.sub = this.activatedRoute.params.subscribe(params => {
      const ra = params['ra'];
      this.alunoService.buscar(ra).subscribe((response: Aluno) => {
        this.aluno = response;
      });
    });
    this.cursoService.lista().subscribe((response: Array<Curso>) => {
      this.cursos = response;
    });
  }

  salvar() {
    console.log(this.aluno);
    this.alunoService.alterar(this.aluno, this.aluno.ra)
    .subscribe(response => {
      this.router.navigate(['/aluno/lista']);
    });
  }

  excluir() {
    this.alunoService.excluir(this.aluno.ra)
    .subscribe(response => {
      this.router.navigate(['/aluno/lista']);
    });
  }

}
