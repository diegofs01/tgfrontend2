import { Injectable } from '@angular/core';
import { TipoOcorrencia } from '../models/tipo-ocorrencia';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoOcorrenciaService {

  public rota = 'tipoOcorrencia/';

  constructor(private httpClient: HttpClient) { }

  salvar(tipoOcorrencia: TipoOcorrencia) {
    return this.httpClient.post(environment.apiUrl + this.rota, tipoOcorrencia);
  }

  lista() {
    return this.httpClient.get(environment.apiUrl + this.rota);
  }

  buscar(id: number) {
    return this.httpClient.get(environment.apiUrl + this.rota + id);
  }

  alterar(tipoOcorrencia: TipoOcorrencia, id: number) {
    return this.httpClient.put(environment.apiUrl + this.rota + id, tipoOcorrencia);
  }

  excluir(id: number) {
    return this.httpClient.delete(environment.apiUrl + this.rota + id);
  }
}
