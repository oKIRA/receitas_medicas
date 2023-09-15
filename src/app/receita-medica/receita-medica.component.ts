import { Component, OnInit } from '@angular/core';
import { Receita } from '../models/receita.model';
import { ReceitaDataService } from '../services/receita.data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receita-medica',
  templateUrl: './receita-medica.component.html',
  styleUrls: ['./receita-medica.component.css'],
})
export class ReceitaMedicaComponent implements OnInit {
  receita: Receita = {
    paciente: {
      nome: 'Joao',
      cpf: '123.456.789-0',
      dataNascimento: '14-09-2023',
    },
    medicamentos: [{
      nome: 'Brondilate',
      categoria: 'Xarope',
      codigoAnvisa: 'X01287'

    }],
  };
  public form: FormGroup;

  constructor(
    private receitaDataService: ReceitaDataService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      patientName: new FormControl({ value: '', disabled: false }),
      patientCPF: new FormControl({ value: '', disabled: false }),
      patientDOB: new FormControl({ value: '', disabled: false }),
      medicationName: new FormControl({ value: '', disabled: false }),
      medicationCategory: new FormControl({ value: '', disabled: false }),
      medicationANVISA: new FormControl({ value: '', disabled: false }),
    });
  }

  ngOnInit(): void {
    this.listarReceitas();
  }

  adicionarMedicamento() {
    this.receita?.medicamentos?.push({
      nome: this.form?.get('medicationName')?.value,
      categoria: this.form?.get('medicationCategory')?.value,
      codigoAnvisa: this.form?.get('medicationANVISA')?.value,
    });
  }

  adicionarPaciente() {
    this.receita.paciente = {
      nome: this.form?.get('patientName')?.value,
      cpf: this.form?.get('patientCPF')?.value,
      dataNascimento: this.form?.get('patientDOB')?.value,
    };
  }

  removerMedicamento(index: number) {
    this.receita.medicamentos?.splice(index, 1);
  }

  adicionarReceita() {
    this.receitaDataService.adicionarReceita(this.receita).subscribe(novaReceita => {
      this.receita = novaReceita;
    });

    console.log(this.receita)
  }

  listarReceitas() {
    return this.receitaDataService.listarReceitas();
  }

  removerMedicamentoReceita(receitaIndex: number, medicamentoIndex: number) {
    // this.receitaDataService.removerMedicamentoReceita(receitaIndex, medicamentoIndex).subscribe(() => {
    //   this.receita.medicamentos.splice(medicamentoIndex, 1);
    // });
  }

  removerReceita(index: string) {
    this.receitaDataService.excluirReceita(index).subscribe(() => {
      this.receita = {
        paciente: {
          nome: '',
          cpf: '',
          dataNascimento: '',
        },
        medicamentos: [],
      };
    });
  }
}
