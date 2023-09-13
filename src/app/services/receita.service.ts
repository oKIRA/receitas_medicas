import { Injectable } from '@angular/core';
import { Receita } from '../models/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private receitas: Receita[] = [];

  adicionarReceita(receita: Receita) {
    this.receitas.push(receita);
  }

  listarReceitas() {
    return this.receitas;
  }

  atualizarReceita(index: number, receita: Receita) {
    if (index >= 0 && index < this.receitas.length) {
      this.receitas[index] = receita;
    }
  }

  excluirReceita(index: number) {
    if (index >= 0 && index < this.receitas.length) {
      this.receitas.splice(index, 1);
    }
  }
}
