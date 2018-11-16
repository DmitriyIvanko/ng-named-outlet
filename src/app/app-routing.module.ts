import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    loadChildren: './user/user.module#UserModule',
    path: 'user',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // debugger purpose only;
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
