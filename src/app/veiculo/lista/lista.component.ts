import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/models/veiculo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public veiculos: Veiculo[];
  public veiculo: Veiculo;
  public filtroPlaca: string;

  constructor(
    private veiculoService: VeiculoService
  ) { }

  ngOnInit() {
    this.veiculos = [];
    this.lista();
  }

  lista() {
    this.veiculoService.lista().subscribe((response: Array<Veiculo>) => {
      this.veiculos = response;
    });
  }

  filtrarVeiculo() {
    this.filtroPlaca = this.filtroPlaca.toUpperCase();
    const tempList = this.veiculos;
    this.veiculos = [];
    tempList.forEach(veiculo => {
      if (veiculo.placa === this.filtroPlaca) {
        this.veiculos.push(veiculo);
      }
    });
  }

  resetarFiltro() {
    this.lista();
    this.filtroPlaca = '';
  }

  excluirVeiculo(placa) {
    this.veiculoService.excluir(placa)
    .subscribe(response => {
      window.location.reload();
    });
  }

}
