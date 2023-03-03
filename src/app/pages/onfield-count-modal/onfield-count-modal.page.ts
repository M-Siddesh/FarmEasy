import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPopupPageModule } from '../modal-popup/modal-popup.module';

@Component({
  selector: 'app-onfield-count-modal',
  templateUrl: './onfield-count-modal.page.html',
  styleUrls: ['./onfield-count-modal.page.scss'],
})
export class OnfieldCountModalPage implements OnInit {

  constructor( private modalController : ModalController,public router: Router) { }
  items :any;

  ngOnInit() {
   this.items= [{ "name":"John"},{"name":"kean"},{ "name":"John"},{"name":"kean"},{ "name":"John"},{"name":"kean"},{ "name":"John"},{ "name":"John"},{"name":"kean"}]
  }
  pay(){
    this.router.navigate(['/home/settings']);
    this.closeModel();
    this.modalController.dismiss(null, "",  "ModalPopupPage");
    
  }
  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);

  }

}