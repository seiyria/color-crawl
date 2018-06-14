import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TimeAgoPipe } from 'time-ago-pipe';
import { GameStateService } from './services/game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
      IonicStorageModule.forRoot({
          name: '__colorCrawl'
      }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GameStateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
