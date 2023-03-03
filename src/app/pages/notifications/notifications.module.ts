import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { NotificationsPage } from "./notifications.page";

@NgModule({
    declarations: [NotificationsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NotificationsPageRoutingModule
    ]
})
export class LoginPageModule { }