import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexPage } from './index.page';

const routes: Routes = [
    // {
    //     path: 'home',
    //     component: HomePage,
    //     children: [
    //         {
    //             path: 'feed',
    //             loadChildren: () => import('../pages/feed/feed.module').then(
    //                 n => n.feed
    //             )
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IndexPageRoutingModule { }