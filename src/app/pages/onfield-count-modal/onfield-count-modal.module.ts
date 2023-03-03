import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OnfieldCountModalPageRoutingModule } from "./onfield-count-modal-routing.module";

import { OnfieldCountModalPage } from "./onfield-count-modal.page";

@NgModule({
    declarations: [OnfieldCountModalPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OnfieldCountModalPageRoutingModule
    ]
})
export class OnfieldCountModalPageModule { }