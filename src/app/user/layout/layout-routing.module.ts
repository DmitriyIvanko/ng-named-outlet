import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
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
