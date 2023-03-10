import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(public toastController: ToastController){}

    async presentToast(infoMessage: string) {
        const toast = await this.toastController.create({
            message: 'Registration Successful',
            duration: 2000
        });
        toast.present();
    }
}