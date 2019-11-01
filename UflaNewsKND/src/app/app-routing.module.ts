import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'feed', loadChildren: './telas/feed/feed.module#FeedPageModule' },
  { path: 'perfil', loadChildren: './telas/perfil/perfil.module#PerfilPageModule' },
  { path: 'inscricoes', loadChildren: './telas/inscricoes/inscricoes.module#InscricoesPageModule' },
  { path: 'boletim/:id', loadChildren: './telas/boletim/boletim.module#BoletimPageModule' },
  { path: 'publicador/:id', loadChildren: './telas/publicador/publicador.module#PublicadorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
