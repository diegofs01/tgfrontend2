import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public veiculo: Veiculo;

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.veiculo = {} as Veiculo;
  }

  salvar() {
    this.veiculoService.salvar(this.veiculo)
    .subscribe(response => {
      this.router.navigate(['/veiculo/lista']);
    });
  }

  limparCampos() {
    this.veiculo = {} as Veiculo;
  }


}
