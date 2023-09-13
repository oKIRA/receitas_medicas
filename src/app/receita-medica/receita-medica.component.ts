import { Component } from '@angular/core';
import { Receita } from '../models/receita.model';
import { ReceitaDataService } from '../services/receita.data.service';

@Component({
  selector: 'app-receita-medica',
  templateUrl: './receita-medica.component.html',
  styleUrls: ['./receita-medica.component.css']
})
export class ReceitaMedicaComponent {
  receita: Receita = {
    paciente: {
      nome: '',
      cpf: '',
      dataNascimento: ''
    },
    medicamentos: []
  };

  constructor(public receitaDataService: ReceitaDataService) {
    this.receitaDataService.listarReceitas().subscribe(receita => {
      this.receita = receita;
    });
  }

  adicionarMedicamento() {
    this.receita.medicamentos.push({
      nome: '',
      categoria: '',
      codigoAnvisa: ''
    });
  }

  removerMedicamento(index: number) {
    this.receita.medicamentos.splice(index, 1);
  }

  adicionarReceita() {
    this.receitaDataService.adicionarReceita(this.receita).subscribe(novaReceita => {
      this.receita = novaReceita;
    });
  }

  listarReceitas() {
    return this.receitaDataService.listarReceitas();
  }

  removerMedicamentoReceita(receitaIndex: number, medicamentoIndex: number) {
    this.receitaDataService.removerMedicamentoReceita(receitaIndex, medicamentoIndex).subscribe(() => {
      this.receita.medicamentos.splice(medicamentoIndex, 1);
    });
  }

  removerReceita(index: string) {
    this.receitaDataService.excluirReceita(index).subscribe(() => {
      this.receita = {
        paciente: {
          nome: '',
          cpf: '',
          dataNascimento: ''
        },
        medicamentos: []
      };
    });
  }
}
