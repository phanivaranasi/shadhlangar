import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';

const comp = [CarouselComponent]

@NgModule({
  declarations: comp,
  imports: [
    CommonModule
  ],
  exports: comp

})
export class CustComponentModule { }
