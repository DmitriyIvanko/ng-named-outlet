import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LayoutWarningComponent } from './layout-warning/layout-warning.component';

const routes: Routes = [
  {
    children: [
      {
        path: 'layout-warning',
        component: LayoutWarningComponent,
        outlet: 'layoutPopup',
      }
    ],
    path: 'item',
    component: LayoutComponent,
  },
  {
    redirectTo: 'item',
    path: '',
    pathMatch: 'full',
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
export class LayoutRoutingModule { }
