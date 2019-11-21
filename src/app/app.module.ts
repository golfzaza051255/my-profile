import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SharedModule } from './shared/shared.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    SocialMediaComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile', component: MainProfileComponent },
      { path: 'socisl', component: SocialMediaComponent },
      { path: 'test', component: TestComponent }
      // , { path: 'about', loadChildren: '../about/about.module#AboutModule' }
      // , { path: 'contact', loadChildren: '../about/about.module#AboutModule' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
