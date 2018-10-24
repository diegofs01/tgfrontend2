import { Component, OnInit } from '@angular/core';
import { TipoOcorrencia } from 'src/app/models/tipo-ocorrencia';
import { Router } from '@angular/router';
import { TipoOcorrenciaService } from 'src/app/services/tipo-ocorrencia.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public tipoOcorrencia: TipoOcorrencia;

  constructor(
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoOcorrencia = {} as TipoOcorrencia;
  }

  salvar() {
    this.tipoOcorrenciaService.salvar(this.tipoOcorrencia)
    .subscribe(response => {
      this.router.navigate(['/tipoOcorrencia/lista']);
    });
  }

  limparCampos() {
    this.tipoOcorrencia = {} as TipoOcorrencia;
  }

}
