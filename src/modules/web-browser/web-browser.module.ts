import { OperaComponent } from './../../app/opera/opera.component';
import { FirefoxComponent } from './../../app/firefox/firefox.component';
import { ChromeComponent } from './../../app/chrome/chrome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBrowserRoutingModule } from './web-browser-routing.module';
import { WebBrowserComponent } from './web-browser/web-browser.component';

@NgModule({
  declarations: [WebBrowserComponent, ChromeComponent, OperaComponent, FirefoxComponent],
  imports: [
    CommonModule,
    WebBrowserRoutingModule
  ]
})
export class WebBrowserModule { }
