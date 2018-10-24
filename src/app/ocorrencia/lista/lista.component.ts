import { Component, OnInit } from '@angular/core';
import { TipoOcorrencia } from 'src/app/models/tipo-ocorrencia';
import { Ocorrencia } from 'src/app/models/ocorrencia';
import { OcorrenciaService } from 'src/app/services/ocorrencia.service';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { TipoOcorrenciaService } from 'src/app/services/tipo-ocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Veiculo } from 'src/app/models/veiculo';
import { FiltroOcorrenciasComponent } from 'src/app/dialogs/filtro-ocorrencias/filtro-ocorrencias.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public tiposOcorrencias: TipoOcorrencia[];
  public ocorrencias: Ocorrencia[];
  public listaVazia: boolean;
  public listaComFiltro: boolean;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private veiculoService: VeiculoService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.ocorrencias = [];
    this.listarVeiculos();
    this.tipoOcorrenciaService.lista().subscribe((response: Array<TipoOcorrencia>) => {
      this.tiposOcorrencias = response;
      this.tiposOcorrencias.unshift({id: 0, nome: 'Nenhum'});
    });
  }

  listarVeiculos() {
    this.ocorrenciaService.lista().subscribe((response: Array<Ocorrencia>) => {
      this.ocorrencias = response;
      if (this.ocorrencias.length > 0) {
        this.listaVazia = false;
      } else {
        this.listaVazia = true;
      }
    });
    this.listaComFiltro = false;
  }

  formataData(ocorrencia: Ocorrencia) {
    const tempData = new Date(ocorrencia.data);
    tempData.setDate(tempData.getDate() + 1);
    return tempData.toLocaleDateString();
  }

  excluirOcorrencia(numero: number) {
    this.ocorrenciaService.excluir(numero)
    .subscribe(response => {
      window.location.reload();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(FiltroOcorrenciasComponent, {
      width: '600px',
      data: this.tiposOcorrencias,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.filtro === 'aluno') {
        this.filtrarOcorrenciasByRA(result.ra);
      } else {
        if (result.filtro === 'veiculo') {
          this.filtrarOcorrenciasByVeiculo(result.placa);
        } else {
          if (result.filtro === 'periodo/tipo') {
            this.filtrarOcorrenciasByPeriodoETipo(result.periodoInicial, result.periodoFinal, result.idTipo);
          } else {
            this.listarVeiculos();
          }
        }
      }
    });
  }

  filtrarOcorrenciasByVeiculo(placa: string) {
    this.listaComFiltro = true;
    this.ocorrencias = [];
    if (placa !== undefined && placa !== '' && placa.search('_') === -1) {
      placa = placa.toUpperCase();
      this.ocorrenciaService.listarByPlaca(placa).subscribe((data: Array<Ocorrencia>) => {
        this.ocorrencias = data;
      });
    }
  }

  filtrarOcorrenciasByRA(ra: string) {
    this.listaComFiltro = true;
    this.ocorrencias = [];
    if (ra !== undefined && ra !== '') {
      const tempVeiculos = [];
      this.veiculoService.lista().subscribe((data: Array<Veiculo>) => {
        const tempData = data;
        tempData.forEach(td => {
          if (td.raAluno === ra) {
            tempVeiculos.push(td);
          }
        });
        tempVeiculos.forEach(vei => {
          this.ocorrenciaService.listarByPlaca(vei.placa).subscribe((data2: Array<Ocorrencia>) => {
            this.ocorrencias = this.ocorrencias.concat(data2);
          });
        });
      });
    }
  }

  filtrarOcorrenciasByPeriodoETipo(periodoInicial: Date, periodoFinal: Date, idTipo: number) {
    if (idTipo !== 0 &&
      (periodoInicial === undefined || periodoInicial.toString() === '') &&
      (periodoFinal === undefined || periodoFinal.toString() === '')
      ) {
        this.filtroPorTipoOcorrencia(idTipo);
    }

    if (idTipo === 0 &&
      (periodoInicial !== undefined && periodoInicial.toString() !== '') &&
      (periodoFinal !== undefined && periodoFinal.toString() !== '')
      ) {
        this.filtroPorPeriodo(periodoInicial, periodoFinal);
    }

    if (idTipo !== 0 &&
      (periodoInicial !== undefined && periodoInicial.toString() !== '') &&
      (periodoFinal !== undefined && periodoFinal.toString() !== '')
      ) {
        this.filtroPorPeriodoETipo(periodoInicial, periodoFinal, idTipo);
    }
  }

  filtroPorTipoOcorrencia(idTipo: number) {
    this.listaComFiltro = true;
    const tempList = [];

    this.ocorrencias.forEach(oco => {
      if (oco.tipoOcorrencia.id === idTipo) {
        tempList.push(oco);
      }
    });
    this.ocorrencias = tempList;
  }

  filtroPorPeriodo(periodoInicial: Date, periodoFinal: Date) {
    this.listaComFiltro = true;
    if (periodoInicial <= periodoFinal) {
      const tempList = [];

      this.ocorrencias.forEach(oco => {
        if (oco.data >= periodoInicial && oco.data <= periodoFinal) {
          tempList.push(oco);
        }
      });
      this.ocorrencias = tempList;
    }
  }

  filtroPorPeriodoETipo(periodoInicial: Date, periodoFinal: Date, idTipo: number) {
    this.listaComFiltro = true;
    if (periodoInicial <= periodoFinal) {
      const tempList = [];

      this.ocorrencias.forEach(oco => {
        if (oco.data >= periodoInicial && oco.data <= periodoFinal && oco.tipoOcorrencia.id === idTipo) {
          tempList.push(oco);
        }
      });
      this.ocorrencias = tempList;
    }
  }

}
