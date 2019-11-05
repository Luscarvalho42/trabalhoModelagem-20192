import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../telas/perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../telas/feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../telas/inscricoes/inscricoes.module').then(m => m.InscricoesPageModule)
          }
        ]
      },
      {
        path: '',
        loadChildren: () =>
          import('../telas/login/login.module').then(m => m.LoginPageModule)
      }
    ]
  },
  {
    path: '',
    loadChildren: () =>
      import('../telas/login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
