import { Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  public rota = 'veiculo/';

  constructor(private httpClient: HttpClient) { }

  salvar(veiculo: Veiculo) {
    return this.httpClient.post(environment.apiUrl + this.rota, veiculo);
  }

  lista() {
    return this.httpClient.get(environment.apiUrl + this.rota);
  }

  buscar(placa: string) {
    return this.httpClient.get(environment.apiUrl + this.rota + placa);
  }

  alterar(veiculo: Veiculo, placa: string) {
    return this.httpClient.put(environment.apiUrl + this.rota + placa, veiculo);
  }

  excluir(placa: string) {
    return this.httpClient.delete(environment.apiUrl + this.rota + placa);
  }
}
