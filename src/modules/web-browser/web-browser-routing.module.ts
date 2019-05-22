import { OperaComponent } from './../../app/opera/opera.component';
import { FirefoxComponent } from './../../app/firefox/firefox.component';
import { ChromeComponent } from './../../app/chrome/chrome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo:"webBrowser", pathMatch:"full"},
  {path:"chrome", component: ChromeComponent},
  {path: "opera", component: OperaComponent},
  {path: "firefox", component:FirefoxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebBrowserRoutingModule { }
