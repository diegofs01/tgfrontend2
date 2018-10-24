import { Component, OnInit } from '@angular/core';
import { TipoOcorrencia } from 'src/app/models/tipo-ocorrencia';
import { TipoOcorrenciaService } from 'src/app/services/tipo-ocorrencia.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public tiposOcorrencias: TipoOcorrencia[];

  constructor(
    private tipoOcorrenciaService: TipoOcorrenciaService
  ) { }

  ngOnInit() {
    this.tiposOcorrencias = [];
    this.lista();
  }

  lista() {
    this.tipoOcorrenciaService.lista().subscribe((response: Array<TipoOcorrencia>) => {
      this.tiposOcorrencias = response;
    });
  }

  excluirTipoOcorrencia(id) {
    this.tipoOcorrenciaService.excluir(id)
    .subscribe(response => {
      window.location.reload();
    });
  }
}

