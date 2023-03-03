import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreateModalPopupPageRoutingModule } from './create-modal-popup-routing.module';

import { CreateModalPopupPage } from "./create-modal-popup.page";

@NgModule({
    declarations: [CreateModalPopupPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateModalPopupPageRoutingModule
    ]
})
export class HomePageModule { }