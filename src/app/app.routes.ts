import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AdicionarFornecedorComponent } from './components/fornecedor/adicionar-fornecedor/adicionar-fornecedor.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fornecedor/adicionar', component: AdicionarFornecedorComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];
