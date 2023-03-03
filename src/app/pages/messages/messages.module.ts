import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from "./messages.page";

@NgModule({
    declarations: [MessagesPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MessagesPageRoutingModule
    ]
})
export class LoginPageModule { }