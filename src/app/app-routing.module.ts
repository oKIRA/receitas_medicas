import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaController } from './controllers/receita.controller';


const routes: Routes = [
  { path: 'paciente', component: ReceitaController },
  { path: '', redirectTo: '/paciente', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
