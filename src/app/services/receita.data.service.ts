import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receita } from '../models/receita.model';

@Injectable({
  providedIn: 'root',
})
export class ReceitaDataService {
  private apiUrl = 'http://localhost:3000/api/receitas';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  public receita: Receita = new Receita();

  constructor(private http: HttpClient) {}

  listarReceitas(): Observable<Receita[]> {
    return this.http
      .get<Receita[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Receita[]>('listarReceitas', [])));
  }

  adicionarReceita(receita: Receita): Observable<Receita> {
    return this.http
      .post<Receita>(this.apiUrl, receita, this.httpOptions)
      .pipe(catchError(this.handleError<Receita>('adicionarReceita')));
  }

  atualizarReceita(id: string, receita: Receita): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .put(url, receita, this.httpOptions)
      .pipe(catchError(this.handleError<any>('atualizarReceita')));
  }

  excluirReceita(id: string): Observable<Receita> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete<Receita>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Receita>('excluirReceita')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // removerMedicamentoReceita(receitaIndex: number, medicamentoIndex: number) {
  //   if (
  //     receitaIndex >= 0 &&
  //     receitaIndex < this.receitas.length &&
  //     medicamentoIndex >= 0 &&
  //     medicamentoIndex < this.receitas[receitaIndex].medicamentos.length
  //   ) {
  //     this.receitas[receitaIndex].medicamentos.splice(medicamentoIndex, 1);
  //   }
  // }

  // adicionarMedicamentoReceita(receitaIndex: number, medicamento: any) {
  //   if (receitaIndex >= 0 && receitaIndex < this.receitas.length) {
  //     this.receitas[receitaIndex].medicamentos.push(medicamento);
  //   }
  // }
  adicionarMedicamentoReceita(receitaIndex: number, medicamento: any) {
    if (receitaIndex && receitaIndex && this.receita) {
      this.receita.medicamentos?.push(medicamento);
    }
  }
}
