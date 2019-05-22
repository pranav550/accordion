import { MobilesComponent } from './../../app/mobiles/mobiles.component';
import { DestopComponent } from './../../app/destop/destop.component';
import { TabletsComponent } from './../../app/tablets/tablets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "responsive", pathMatch: "full" },
  { path: "tablets", component: TabletsComponent },
  { path: "desktop", component: DestopComponent },
  { path: "mobiles", component: MobilesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveWebRoutingModule { }
