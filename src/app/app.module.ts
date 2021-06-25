import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandinPageComponent } from './landin-page/landin-page.component';
import { CustComponentModule } from './cust-component/cust-component.module';
import { ArtModule } from './module-art/module-art.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SocialShareComponent } from './social-share/social-share.component';


@NgModule({
  declarations: [
    AppComponent,
    LandinPageComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    SocialShareComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustComponentModule,
    ArtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
