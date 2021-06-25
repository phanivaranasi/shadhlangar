import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtLandingComponent } from './art-landing/art-landing.component';

const routes: Routes = [
    {
        path: 'art',
        pathMatch: "full",
        component: ArtLandingComponent

    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ArtRoutingModule { }