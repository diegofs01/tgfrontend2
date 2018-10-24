import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from 'src/app/models/ocorrencia';
import { TipoOcorrencia } from 'src/app/models/tipo-ocorrencia';
import { OcorrenciaService } from 'src/app/services/ocorrencia.service';
import { TipoOcorrenciaService } from 'src/app/services/tipo-ocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { VeiculoNaoCadastradoComponent } from 'src/app/dialogs/veiculo-nao-cadastrado/veiculo-nao-cadastrado.component';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public ocorrencia: Ocorrencia;
  public sub: any;
  public placa: string;
  public tiposOcorrencias: TipoOcorrencia[];
  public paginaAnterior: string;

  public hora = [/[0-2]/, /[0-9]/, ':', /[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.ocorrencia = {} as Ocorrencia;
    this.tipoOcorrenciaService.lista().subscribe((response: Array<TipoOcorrencia>) => {
      this.tiposOcorrencias = response;
    });
  }

  salvar() {
    this.ocorrenciaService.salvar(this.ocorrencia)
    .subscribe(response => {
      this.voltar();
    });
  }

  limparCampos() {
    this.ocorrencia = {} as Ocorrencia;
    this.ocorrencia.placaVeiculo = this.placa;
  }

  voltar() {
    this.router.navigate(['/ocorrencia/listaOcorrencia']);
  }

  openDialog(numero: Number) {
    const dialogRef = this.dialog.open(VeiculoNaoCadastradoComponent, {
      width: '600px',
      data: numero,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.salvar();
      }
    });
  }

  verificarVeiculo() {
    if (this.validarCadastro()) {

      this.ocorrencia.placaVeiculo = this.ocorrencia.placaVeiculo.toUpperCase();

      this.ocorrenciaService.verificarVeiculo(this.ocorrencia.placaVeiculo)
      .subscribe((response: Number) => {
        if (response === 0) {
          this.openDialog(response);
        } else {
          this.salvar();
        }
      });
    }
  }

  validarCadastro(): boolean {
    if (this.ocorrencia.placaVeiculo === undefined) {
      return false;
    }
    if (this.ocorrencia.placaVeiculo === '') {
      return false;
    }
    if (this.ocorrencia.placaVeiculo.search('_') >= 0) {
      return false;
    }
    if (this.ocorrencia.data === undefined) {
      return false;
    }
    if (!isNaN(this.ocorrencia.data.valueOf())) {
      return false;
    }
    if (this.ocorrencia.hora === undefined) {
      return false;
    }
    if (this.ocorrencia.hora === '') {
      return false;
    }
    if (this.ocorrencia.tipoOcorrencia === undefined) {
      return false;
    }
    if (this.ocorrencia.descricao === undefined) {
      return false;
    }
    if (this.ocorrencia.descricao === '') {
      return false;
    }
    return true;
  }

}
