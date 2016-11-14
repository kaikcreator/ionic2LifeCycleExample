import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreditsPage } from '../credits/credits';
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
  image:string;
  creditsPage:any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.creditsPage = CreditsPage;
  }

  ionViewDidLoad() {
    let audioFile = this.params.get('audio');
    console.log("loading audio ", audioFile);
    this.music = new howler.Howl({ src: [`assets/music/${audioFile}.mp3`]});
    this.image = `assets/img/${audioFile}.jpg`;
  }

  ionViewDidEnter(){
    console.log("playing audio");
    this.music.play();
    this.music.loop(true);
  }

  ionViewWillLeave(){
    console.log("pausing audio");
    this.music.pause();
  }

  ionViewWillUnload() {
    console.log("stopping audio");
    this.music.stop();
    this.music = null;
  }  

}
