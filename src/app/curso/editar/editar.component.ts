import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private sub: any;
  public curso: Curso;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.curso = {} as Curso;
    this.sub = this.route.params.subscribe(params => {
      this.cursoService.buscar(params['id']).subscribe((response: Curso) => {
        this.curso = response;
      });
    });
  }

  salvar() {
    this.cursoService.alterar(this.curso, this.curso.id)
    .subscribe(response => {
      this.router.navigate(['/curso/lista']);
    });
  }

  excluir() {
    this.cursoService.excluir(this.curso.id)
    .subscribe(response => {
      this.router.navigate(['/curso/lista']);
    });
  }
}
