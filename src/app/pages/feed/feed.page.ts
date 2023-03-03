import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController, ModalController, NavController } from "@ionic/angular";
import { CreateModalPopupPage } from "../create-modal-popup/create-modal-popup.page";
import { ModalPopupPage } from "../modal-popup/modal-popup.page";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.page.html',
    styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {

    public displayUserData: any;
    segmentModel: any;
    modelData: any;

    constructor(private menu: MenuController, private router: Router, public modalController: ModalController) {
        this.segmentModel="jobs";
    }

    ngOnInit(): void {
        
    }

    viewJob(){
        this.router.navigate(['/feed/view']);
    }

    logout(){
        this.router.navigate(['/login']);
    }

    createJob(){
        this.router.navigate(['/feed/create']);
    }

    async closeModel(){
        const close: string = "Modal Removed";
        await this.modalController.dismiss(close);
    }

    async openIonModal(){
        const modal = await this.modalController.create({
            component: ModalPopupPage,
            id: "ModalPopupPage",
            cssClass: 'small-modal',
        });

        modal.onDidDismiss().then((modelData) => {
            if(modelData !== null) {
                this.modelData = this.modelData.data;
                console.log('Modal Data : ' +  this.modelData.data);
            }
        });
        return await modal.present();
    }

    async openCreateJobModal(){
        const modal = await this.modalController.create({
            component: CreateModalPopupPage,
            cssClass: 'small-modal',
        });

        modal.onDidDismiss().then((modelData) => {
            if (modelData !== null) {
                this.modelData = modelData.data;
                console.log('Model Data : ' + modelData.data);
            }
        });
        return await modal.present();
    }
}
