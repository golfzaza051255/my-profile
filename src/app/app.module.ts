import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile', component: MainProfileComponent },
      { path: 'socisl', component: SocialMediaComponent }
      // , { path: 'about', loadChildren: '../about/about.module#AboutModule' }
      // , { path: 'contact', loadChildren: '../about/about.module#AboutModule' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
