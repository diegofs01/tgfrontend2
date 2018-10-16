import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }

  save(curso: Curso) {
    return this.httpClient.post(environment.apiUrl + 'curso', curso);
  }

  lista() {
    return this.httpClient.get(environment.apiUrl + 'curso');
  }

  buscar(id: number) {
    return this.httpClient.get(environment.apiUrl + 'curso/' + id);
  }

  alterar(curso: Curso, id: number) {
    return this.httpClient.put(environment.apiUrl + 'curso/' + id, curso);
  }

  excluir(id: number) {
    return this.httpClient.delete(environment.apiUrl + 'curso/' + id);
  }
}
