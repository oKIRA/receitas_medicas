// import { Component } from '@angular/core';
// import { Receita } from '../models/receita.model';
// import { ReceitaService } from '../services/receita.service';
// import { ReceitaDataService } from '../services/receita.data.service';

// @Component({
//   selector: 'app-receita',
//   templateUrl: '../receita-medica/receita-medica.component.html',
//   styleUrls: ['../receita-medica/receita-medica.component.css']
// })
// export class ReceitaController {
//     novaReceita: Receita = {
//         paciente: {
//           nome: '',
//           cpf: '',
//           dataNascimento: ''
//         },
//         medicamentos: []
//       };

//       constructor(private receitaDataService: ReceitaDataService) {}

//       adicionarReceita() {
//         this.receitaDataService.adicionarReceita(this.novaReceita);
//         this.novaReceita = {
//           paciente: {
//             nome: '',
//             cpf: '',
//             dataNascimento: ''
//           },
//           medicamentos: []
//         };
//       }


//   listarReceitas() {
//     return this.receitaDataService.listarReceitas();
//   }

//   atualizarReceita(index: string, receita: Receita) {
//     this.receitaDataService.atualizarReceita(index, receita);
//   }

//   excluirReceita(index: string) {
//     this.receitaDataService.excluirReceita(index);
//   }

//   removerMedicamentoReceita(receitaIndex: number, medicamentoIndex: number) {
//     this.receitaDataService.removerMedicamentoReceita(receitaIndex, medicamentoIndex);
//   }

//   removerReceita(index: string) {
//     this.receitaDataService.excluirReceita(index);
//   }

//   adicionarMedicamento() {
//     this.novaReceita.medicamentos.push({
//       nome: '',
//       categoria: '',
//       codigoAnvisa: ''
//     });
//   }

//   removerMedicamento(index: number) {
//     this.novaReceita.medicamentos.splice(index, 1);
//   }
// }
