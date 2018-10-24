import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';

import { ListaComponent as CursoLista } from './curso/lista/lista.component';
import { EditarComponent as CursoEditar } from './curso/editar/editar.component';
import { NovoComponent as CursoNovo } from './curso/novo/novo.component';

import { NovoComponent as VeiculoNovo } from './veiculo/novo/novo.component';
import { EditarComponent as VeiculoEditar } from './veiculo/editar/editar.component';
import { ListaComponent as VeiculoLista } from './veiculo/lista/lista.component';

import { NovoComponent as TipoOcorrenciaNovo } from './tipoOcorrencia/novo/novo.component';
import { EditarComponent as TipoOcorrenciaEditar } from './tipoOcorrencia/editar/editar.component';
import { ListaComponent as TipoOcorrenciaLista } from './tipoOcorrencia/lista/lista.component';

import { NovoComponent as OcorrenciaNovo } from './ocorrencia/novo/novo.component';
import { EditarComponent as OcorrenciaEditar } from './ocorrencia/editar/editar.component';
import { ListaComponent as OcorrenciaLista } from './ocorrencia/lista/lista.component';

import { FiltroOcorrenciasComponent as DialogFiltrarOcorrencias } from './dialogs/filtro-ocorrencias/filtro-ocorrencias.component';
// tslint:disable-next-line:max-line-length
import { VeiculoNaoCadastradoComponent as DialogVeiculoNaoCadastrado } from './dialogs/veiculo-nao-cadastrado/veiculo-nao-cadastrado.component';

@NgModule({
  declarations: [
    AppComponent,

    AlunoLista,
    AlunoEditar,
    AlunoNovo,

    CursoLista,
    CursoEditar,
    CursoNovo,

    VeiculoNovo,
    VeiculoEditar,
    VeiculoLista,

    TipoOcorrenciaNovo,
    TipoOcorrenciaLista,
    TipoOcorrenciaEditar,

    OcorrenciaNovo,
    OcorrenciaEditar,
    OcorrenciaLista,

    DialogFiltrarOcorrencias,
    DialogVeiculoNaoCadastrado
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    FormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,

    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogVeiculoNaoCadastrado,
    DialogFiltrarOcorrencias
  ]
})
export class AppModule { }
