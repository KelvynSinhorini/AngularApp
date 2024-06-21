import { Guid } from "../../core/helpers/guid";
import { TipoFornecedor } from "./tipo-fornecedor";

export class Fornecedor {
  public id?: string;

  constructor(
    public nome: string,
    public documento: string,
    public tipoFornecedor: TipoFornecedor,
    public ativo: boolean,
    id?: string
  ) {
    this.id = id || Guid.newGuid(); // Use o id fornecido ou gere um novo
  }
}
