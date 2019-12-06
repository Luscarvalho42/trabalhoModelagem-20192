import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: './telas/login/login.module#LoginPageModule' },
  { path: 'feed', loadChildren: './telas/feed/feed.module#FeedPageModule' },
  { path: 'perfil', loadChildren: './telas/perfil/perfil.module#PerfilPageModule' },
  { path: 'inscricoes', loadChildren: './telas/inscricoes/inscricoes.module#InscricoesPageModule' },
  { path: 'boletim/:id', canActivate: [AuthGuard], loadChildren: './telas/boletim/boletim.module#BoletimPageModule' },
  { path: 'publicador/:id', loadChildren: './telas/publicador/publicador.module#PublicadorPageModule' },
  { path: 'alterar-nome', loadChildren: './telas/alterar-nome/alterar-nome.module#AlterarNomePageModule' },
  { path: 'alterar-senha', loadChildren: './telas/alterar-senha/alterar-senha.module#AlterarSenhaPageModule' },
  { path: 'alterar-email', loadChildren: './telas/alterar-email/alterar-email.module#AlterarEmailPageModule' },
  { path: 'login', loadChildren: './telas/login/login.module#LoginPageModule' },
  { path: 'cadastroDados', loadChildren: './telas/cadastroDados/cadastroDados.module#CadastroDadosPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
