import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor/fornecedor.service';
import { Fornecedor } from '../../services/fornecedor/fornecedor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule, 
    RouterLink
  ],
  providers: [
    FornecedorService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fornecedores: Fornecedor[] = [];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.fornecedorService
      .obterFornecedores()
      .subscribe({
        next: (data: Fornecedor[]) => {
          this.fornecedores = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
}
