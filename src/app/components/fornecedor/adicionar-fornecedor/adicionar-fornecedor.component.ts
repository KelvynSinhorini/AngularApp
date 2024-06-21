import { Fornecedor } from './../../../services/fornecedor/fornecedor';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoFornecedor } from '../../../services/fornecedor/tipo-fornecedor';
import { FornecedorService } from '../../../services/fornecedor/fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-fornecedor',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './adicionar-fornecedor.component.html',
  styleUrl: './adicionar-fornecedor.component.scss'
})
export class AdicionarFornecedorComponent {

  tipoFornecedor = TipoFornecedor;

  fornecedor: Fornecedor = { 
    nome: '',
    documento: '', 
    tipoFornecedor: TipoFornecedor.PessoaFisica, 
    ativo: true 
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  onSubmit() {
    this.fornecedorService.addFornecedor(this.fornecedor);
    this.router.navigate(['/'])
  }
}
