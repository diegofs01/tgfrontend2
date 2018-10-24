import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from 'src/app/models/ocorrencia';
import { TipoOcorrencia } from 'src/app/models/tipo-ocorrencia';
import { OcorrenciaService } from 'src/app/services/ocorrencia.service';
import { TipoOcorrenciaService } from 'src/app/services/tipo-ocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public ocorrencia: Ocorrencia;
  public tiposOcorrencias: TipoOcorrencia[];
  public sub: any;
  public veiculoCadastrado: string;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ocorrencia = {} as Ocorrencia;
    this.sub = this.route.params.subscribe(params => {
      this.ocorrenciaService.buscar(params['numero']).subscribe((response: Ocorrencia) => {
        this.ocorrencia = response;

        this.tipoOcorrenciaService.lista().subscribe((responseTO: Array<TipoOcorrencia>) => {
          this.tiposOcorrencias = responseTO;
          this.ocorrencia.tipoOcorrencia = this.tiposOcorrencias.find(to => to.id === this.ocorrencia.tipoOcorrencia.id);
          if (this.ocorrencia.veiculoCadastrado) {
            this.veiculoCadastrado = 'Sim';
          } else {
            this.veiculoCadastrado = 'Não';
          }
        });
      });
    });
  }

  salvar() {
    if (this.ocorrencia.descricao !== undefined &&
      this.ocorrencia.descricao !== '') {

      this.ocorrenciaService.alterar(this.ocorrencia, this.ocorrencia.numero)
      .subscribe(() => {
        this.router.navigate(['/ocorrencia/listaOcorrencia']);
      });
    }
  }

  excluir(numero: number) {
    this.ocorrenciaService.excluir(numero)
    .subscribe(() => {
      this.router.navigate(['/ocorrencia/listaOcorrencia']);
    });
  }


}
