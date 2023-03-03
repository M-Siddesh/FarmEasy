import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router,private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Gpay',  
      // subHeader: 'SubTitle',  
      message: 'Do you want to open GPay',  
      buttons: ['Agree', 'DisAgree']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

  logoutAction(){
    this.router.navigate(['/login']);
  }
}