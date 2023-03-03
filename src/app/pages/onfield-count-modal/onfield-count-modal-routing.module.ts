import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OnfieldCountModalPage } from "./onfield-count-modal.page";

const routes: Routes = [
    {
        path: '',
        component: OnfieldCountModalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OnfieldCountModalPageRoutingModule { }