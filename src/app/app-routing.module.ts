import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { WarningPopupComponent } from './warning-popup/warning-popup.component';

const routes: Routes = [
  {
    loadChildren: './user/user.module#UserModule',
    path: 'user',
  },
  {
    path: 'warning',
    component: WarningPopupComponent,
    outlet: 'popup',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
