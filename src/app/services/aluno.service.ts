import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  apiUrl = 'https://tgbackend.herokuapp.com/api/aluno/';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get(this.apiUrl);
  }

  buscar(ra: string) {
    return this.httpClient.get(`${this.apiUrl}` + ra);
  }

  salvar(aluno: Aluno) {
    return this.httpClient.post(`${this.apiUrl}`, aluno);
  }

  alterar(aluno: Aluno, ra: string) {
    return this.httpClient.put(`${this.apiUrl}` + ra, aluno);
  }

  excluir(ra: string) {
    return this.httpClient.delete(`${this.apiUrl}` + ra);
  }
}
