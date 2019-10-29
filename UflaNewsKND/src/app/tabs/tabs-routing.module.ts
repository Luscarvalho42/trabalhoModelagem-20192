import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabPerfil/tabPerfil.module').then(m => m.TabPerfilPageModule)
          }
        ]
      },
      {
        path: 'Feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabFeed/tabFeed.module').then(m => m.TabFeedPageModule)
          }
        ]
      },
      {
        path: 'Inscricoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabInscricoes/tabInscricoes.module').then(m => m.TabInscricoesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
