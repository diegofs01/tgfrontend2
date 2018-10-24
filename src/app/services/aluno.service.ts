import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private rota = 'aluno/';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get(environment.apiUrl + this.rota);
  }

  buscar(ra: string) {
    return this.httpClient.get(environment.apiUrl + this.rota + ra);
  }

  salvar(aluno: Aluno) {
    return this.httpClient.post(environment.apiUrl + this.rota, aluno);
  }

  alterar(aluno: Aluno, ra: string) {
    return this.httpClient.put(environment.apiUrl + this.rota + ra, aluno);
  }

  excluir(ra: string) {
    return this.httpClient.delete(environment.apiUrl + this.rota + ra);
  }
}
