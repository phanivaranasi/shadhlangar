import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtLandingComponent } from './art-landing/art-landing.component';
import {ArtRoutingModule} from './art.routing';


@NgModule({
  declarations: [ArtLandingComponent],
  imports: [
    CommonModule,
    ArtRoutingModule
  ]
})
export class ArtModule { }
