import {Option} from "./option";

export interface Component {
  nome: string;
  tipoComponente: string;
  options: Option[];
  descricao: string;
}
