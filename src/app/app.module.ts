import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitaService } from './services/receita.service';
import { ReceitaMedicaComponent } from './receita-medica/receita-medica.component';


@NgModule({
  declarations: [AppComponent, ReceitaMedicaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ReceitaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
