import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";

@Component({
    selector: 'app-create-modal-popup',
    templateUrl: './create-modal-popup.page.html',
    styleUrls: ['./create-modal-popup.page.scss']
})
export class CreateModalPopupPage implements OnInit {

    constructor(public modalController: ModalController, public alertCtrl: AlertController , public router: Router) {}

    ngOnInit(): void {
        
    }
    async closeModel(){
        const close: string = "Modal Removed";
        await this.modalController.dismiss(close);
    }

    async showAlert(){
        const alert = await this.alertCtrl.create({
            header: 'Success',
            message: 'Successfully posted the job',
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
}
