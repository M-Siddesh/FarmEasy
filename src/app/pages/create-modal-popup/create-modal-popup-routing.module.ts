import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateModalPopupPage } from "./create-modal-popup.page";

const routes: Routes = [
    {
        path: '',
        component: CreateModalPopupPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateModalPopupPageRoutingModule { }