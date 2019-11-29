import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../telas/perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../telas/feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'inscricoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../telas/inscricoes/inscricoes.module').then(m => m.InscricoesPageModule)
          }
        ]
      },
      {
        path: 't',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
