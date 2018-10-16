
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public cursos: Curso[];

  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    this.cursos = [];
    this.lista();
  }

  lista() {
    this.cursoService.lista().subscribe((response: Array<Curso>) => {
      this.cursos = response;
    });
  }

  excluirCurso(id) {
    this.cursoService.excluir(id)
    .subscribe(response => {
      window.location.reload();
    });
  }
}
