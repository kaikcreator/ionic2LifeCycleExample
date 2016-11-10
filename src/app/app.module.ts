import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusicPage } from '../pages/music/music';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicPage
  ],
  providers: []
})
export class AppModule {}
