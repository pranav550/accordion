import { FrontendModule } from "./frontend.module";
import { FrontendComponent } from "./frontend/frontend.component";
import { JavascriptComponent } from "./../../app/javascript/javascript.component";
import { CssComponent } from "./../../app/css/css.component";
import { HtmlComponent } from "./../../app/html/html.component";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "frontened", pathMatch: "full" },
  { path: "html", component: HtmlComponent },
  { path: "css", component: CssComponent },
  { path: "javascript", component: JavascriptComponent }
];
// export class FrontendRoutingModule { }
export const FrontendRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes
);
