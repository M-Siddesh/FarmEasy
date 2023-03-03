import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google:any;
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  
  gmap:any;
  
  //@ViewChild('map',{read:ElementRef,static:false}) mapref:ElementRef;

  @ViewChild('gmap', { static: false })
    mapElement!: ElementRef;
  
  
  constructor(public navCtrl: NavController, private geolocation: Geolocation) { }

  ngOnInit() {    
    //this.loadMap();
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap(){
     const location = new google.maps.LatLng(19.1025427,72.9254307);
      const options = {
        center : location,
        zoom : 20,
        disableDefaultUI:false

      }
     this.gmap = new google.maps.Map(this.mapElement.nativeElement,options);
  }

  loadGMap(){
//   this.geolocation.getCurrentPosition().then(() => {
//   let latLng = new google.maps.LatLng(-17.824858, 31.053028);
//   let mapOptions = {
//     center: latLng,
//     zoom: 15,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   this.gmap = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//   console.log("beforee");
//   console.log(this.gmap);
//   });
  }
}