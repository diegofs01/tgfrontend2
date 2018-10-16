import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';

import { ListaComponent as CursoLista } from './curso/lista/lista.component';
import { EditarComponent as CursoEditar } from './curso/editar/editar.component';
import { NovoComponent as CursoNovo } from './curso/novo/novo.component';

const routes: Routes = [
    {
        path: 'aluno/lista',
        component: AlunoLista
    },
    {
        path: 'aluno/editar/:ra',
        component: AlunoEditar,
    },
    {
        path: 'aluno/novo',
        component: AlunoNovo
    },
    {
        path: 'curso/lista',
        component: CursoLista
    },
    {
        path: 'curso/novo',
        component: CursoNovo
    },
    {
        path: 'curso/editar/:id',
        component: CursoEditar
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }