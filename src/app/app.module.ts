import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Organisations } from '../pages/organisations/organisations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    Users,
    Repos,
    Organisations
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Users,
    Repos,
    Organisations
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GithubUsers,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
