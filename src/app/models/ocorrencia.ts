import { TipoOcorrencia } from './tipo-ocorrencia';

export interface Ocorrencia {
    numero: number;
    placaVeiculo: string;
    data: Date;
    hora: string;
    descricao: string;
    tipoOcorrencia: TipoOcorrencia;
    veiculoCadastrado: boolean;
}
