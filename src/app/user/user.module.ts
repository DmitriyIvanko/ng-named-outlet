import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { WarningPopupComponent } from './warning-popup/warning-popup.component';

@NgModule({
  declarations: [
    UserComponent,
    WarningPopupComponent,
  ],
  imports: [
    UserRoutingModule,
  ],
})
export class UserModule { }
