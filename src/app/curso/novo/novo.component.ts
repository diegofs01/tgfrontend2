import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public curso: Curso;

    constructor(
      private cursoService: CursoService,
      private router: Router
    ) { }

    ngOnInit() {
      this.curso = {} as Curso;
    }

    salvar() {
      this.cursoService.save(this.curso)
      .subscribe(response => {
        this.router.navigate(['/curso/lista']);
      });
    }

    limparCampos() {
      this.curso = {} as Curso;
    }
}
