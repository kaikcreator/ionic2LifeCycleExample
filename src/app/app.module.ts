import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusicPage } from '../pages/music/music';
import { CreditsPage } from '../pages/credits/credits';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicPage,
    CreditsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicPage,
    CreditsPage
  ],
  providers: []
})
export class AppModule {}
