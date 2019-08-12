import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC2xTVUZ3PiNc6gEPupv0kuNhOZhVN0CJY",
      authDomain: "seguindojesus-ad57e.firebaseapp.com",
      databaseURL: "https://seguindojesus-ad57e.firebaseio.com",
      projectId: "seguindojesus-ad57e",
      storageBucket: "seguindojesus-ad57e.appspot.com",
      messagingSenderId: "400117401728",
      appId: "1:400117401728:web:5f995e6a2f96078e"

    })
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
