import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ocorrencia } from '../models/ocorrencia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  public rota = 'ocorrencia/';

  constructor(private httpClient: HttpClient) { }

  salvar(ocorrencia: Ocorrencia) {
    ocorrencia.hora = ocorrencia.hora.concat(':00');

    const tempData = new Date(ocorrencia.data);
    tempData.setHours(tempData.getHours() + 12);
    ocorrencia.data = tempData;

    return this.httpClient.post(environment.apiUrl + this.rota, ocorrencia);
  }

  lista() {
    return this.httpClient.get(environment.apiUrl + this.rota);
  }

  buscar(numero: number) {
    return this.httpClient.get(environment.apiUrl + this.rota + numero);
  }

  alterar(ocorrencia: Ocorrencia, numero: number) {

    const tempData = new Date(ocorrencia.data);
    tempData.setHours(tempData.getHours() + 12);
    ocorrencia.data = tempData;

    return this.httpClient.put(environment.apiUrl + this.rota + numero, ocorrencia);
  }

  excluir(numero: number) {
    return this.httpClient.delete(environment.apiUrl + this.rota + numero);
  }

  listarByPlaca(placa: string) {
    return this.httpClient.get(environment.apiUrl + this.rota + 'placa/' + placa);
  }

  verificarVeiculo(placa: string) {
    return this.httpClient.get(environment.apiUrl + this.rota + 'verificarVeiculo/' + placa);
  }
}
