import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MusicPage } from '../music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMusicPage(){
    this.navCtrl.push(MusicPage);
  }

}
