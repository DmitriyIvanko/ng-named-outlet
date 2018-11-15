import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
  {
    children: [
      {
        loadChildren: './layout/layout.module#LayoutModule',
        path: 'layout',
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
