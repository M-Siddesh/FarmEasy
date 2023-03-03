import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { OnfieldCountModalPage } from '../onfield-count-modal/onfield-count-modal.page';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage implements OnInit {

  @Input()
    model_title!: string;
  modelData: any;

  constructor(
    private modalController: ModalController,private alertCtrl:AlertController
  ) { }

  ngOnInit() { }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Confirmation',    
      message: 'Successfully applied for the job',  
      buttons: [{
        text: 'OK',
        handler: () => {
          this.closeModel();
        }
      }] 
      
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

  async OpenOnfieldCountModal() {
    const modal = await this.modalController.create({
      component: OnfieldCountModalPage,
      cssClass: 'small-modal',
      });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });

    return await modal.present();
  }

}