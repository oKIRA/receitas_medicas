export class Receita {
  id?: string;
  paciente?: {
    nome: string;
    cpf: string;
    dataNascimento: string;
  };
  medicamentos: {
    nome: string;
    categoria: string;
    codigoAnvisa: string;
  }[] = [];
}
