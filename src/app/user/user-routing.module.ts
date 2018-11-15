import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { UserComponent } from './user.component';
import { WarningPopupComponent } from './warning-popup/warning-popup.component';

const routes: Routes = [
  {
    children: [
      {
        loadChildren: './layout/layout.module#LayoutModule',
        path: 'layout',
      },
      {
        path: 'warning',
        component: WarningPopupComponent,
        outlet: 'popup',
      }
    ],
    component: UserComponent,
    path: '',
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class UserRoutingModule { }
