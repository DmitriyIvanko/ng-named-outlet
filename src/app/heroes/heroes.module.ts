import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    HeroesRoutingModule,
  ],
})
export class HeroesModule { }
