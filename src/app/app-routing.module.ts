import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaMedicaComponent } from './receita-medica/receita-medica.component';


const routes: Routes = [
  { path: 'paciente', component: ReceitaMedicaComponent },
  { path: '', redirectTo: '/paciente', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
