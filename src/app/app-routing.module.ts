import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReversiComponent } from "./games/reversi/reversi.component";
import { PageComponent } from "./page/page.component";

const routes: Routes = [
    {
        path: "WebGames",
        component: PageComponent,
    },
    {
        path: "gameReversi",
        component: ReversiComponent
    },
    {
        path: '',
        redirectTo: '/WebGames',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }