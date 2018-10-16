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
  MatSelectModule
} from '@angular/material';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';

import { ListaComponent as CursoLista } from './curso/lista/lista.component';
import { EditarComponent as CursoEditar } from './curso/editar/editar.component';
import { NovoComponent as CursoNovo } from './curso/novo/novo.component';

@NgModule({
  declarations: [
    AppComponent,

    AlunoLista,
    AlunoEditar,
    AlunoNovo,

    CursoLista,
    CursoEditar,
    CursoNovo
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

    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
