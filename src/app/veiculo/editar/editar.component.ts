import { Component, OnInit, OnDestroy } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, OnDestroy {

  private sub: any;

  public veiculo: Veiculo;

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.veiculo = {} as Veiculo;
    this.sub = this.route.params.subscribe(params => {
      const placa = params['placa'];
      this.veiculoService.buscar(placa).subscribe((response: Veiculo) => {
        this.veiculo = response;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  salvar() {
    this.veiculoService.alterar(this.veiculo, this.veiculo.placa)
    .subscribe(response => {
      this.router.navigate(['/veiculo/lista']);
    });
  }

  excluir() {
    this.veiculoService.excluir(this.veiculo.placa)
    .subscribe(response => {
      this.router.navigate(['/veiculo/lista']);
    });
  }

}
