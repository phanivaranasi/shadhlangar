import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandinPageComponent } from './landin-page/landin-page.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:LandinPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
