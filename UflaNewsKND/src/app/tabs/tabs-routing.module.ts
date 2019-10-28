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
              import('../tabPerfil/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'Feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabFeed/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'Inscricoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabInscricoes/tab3.module').then(m => m.Tab3PageModule)
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
