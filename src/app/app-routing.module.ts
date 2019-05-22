import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "frontened",
    loadChildren: "./../modules/frontend/frontend.module#FrontendModule"
  },
  {
    path: "responsive",
    loadChildren: "./../modules/responsive-web/responsive-web.module#ResponsiveWebModule"
  },
  {
    path: "webBrowser",
    loadChildren: "./../modules/web-browser/web-browser.module#WebBrowserModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
