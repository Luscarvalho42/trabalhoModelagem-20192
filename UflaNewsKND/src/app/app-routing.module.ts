import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './telas/login/login.module#LoginPageModule' },
  { path: 'feed', loadChildren: './telas/feed/feed.module#FeedPageModule' },
  { path: 'perfil', loadChildren: './telas/perfil/perfil.module#PerfilPageModule' },
  { path: 'inscricoes', loadChildren: './telas/inscricoes/inscricoes.module#InscricoesPageModule' },
  { path: 'boletim/:id', loadChildren: './telas/boletim/boletim.module#BoletimPageModule' },
  { path: 'publicador/:id', loadChildren: './telas/publicador/publicador.module#PublicadorPageModule' },
  { path: 'alterar-nome1', loadChildren: './telas/alterar-nome1/alterar-nome1.module#AlterarNome1PageModule' },
  { path: 'alterar-nome2', loadChildren: './telas/alterar-nome2/alterar-nome2.module#AlterarNome2PageModule' },
  { path: 'alterar-senha1', loadChildren: './telas/alterar-senha1/alterar-senha1.module#AlterarSenha1PageModule' },
  { path: 'alterar-senha2', loadChildren: './telas/alterar-senha2/alterar-senha2.module#AlterarSenha2PageModule' },
  { path: 'alterar-email1', loadChildren: './telas/alterar-email1/alterar-email1.module#AlterarEmail1PageModule' },
  { path: 'alterar-email2', loadChildren: './telas/alterar-email2/alterar-email2.module#AlterarEmail2PageModule' },
  { path: 'login', loadChildren: './telas/login/login.module#LoginPageModule' },
  { path: 'cadastro1', loadChildren: './telas/cadastro1/cadastro1.module#Cadastro1PageModule' },
  { path: 'cadastro2', loadChildren: './telas/cadastro2/cadastro2.module#Cadastro2PageModule' },
  { path: 'cadastro3', loadChildren: './telas/cadastro3/cadastro3.module#Cadastro3PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
