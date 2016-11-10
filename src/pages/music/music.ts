import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as howler from 'howler';

/*
  Generated class for the Music page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  music:any;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.music = new howler.Howl({ src: ['assets/music/oceanWaves.wav']});
  }

  ionViewDidEnter(){
    this.music.play();
    this.music.loop(true);
  }

  ionViewWillLeave(){
    this.music.stop();
  }

  ionViewWillUnload() {
    this.music = null;
  }  

}
