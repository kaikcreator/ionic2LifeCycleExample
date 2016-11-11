import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    let audioFile = this.params.get('audio');
    this.music = new howler.Howl({ src: [`assets/music/${audioFile}.mp3`]});
    this.image = `assets/img/${audioFile}.jpg`;
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
