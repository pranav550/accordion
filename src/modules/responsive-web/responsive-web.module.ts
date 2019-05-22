import { TabletsComponent } from './../../app/tablets/tablets.component';
import { MobilesComponent } from './../../app/mobiles/mobiles.component';
import { DestopComponent } from './../../app/destop/destop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveWebRoutingModule } from './responsive-web-routing.module';
import { ResponsiveWebComponent } from './responsive-web/responsive-web.component';

@NgModule({
  declarations: [ResponsiveWebComponent,TabletsComponent,MobilesComponent, DestopComponent],
  imports: [
    CommonModule,
    ResponsiveWebRoutingModule
  ]
})
export class ResponsiveWebModule { }
