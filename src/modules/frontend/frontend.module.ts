import { JavascriptComponent } from './../../app/javascript/javascript.component';
import { CssComponent } from './../../app/css/css.component';
import { HtmlComponent } from './../../app/html/html.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend/frontend.component';

@NgModule({
  declarations: [FrontendComponent, HtmlComponent, CssComponent, JavascriptComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
