import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PrizesComponent} from './prizes.component';
import {PrizesGuard} from './prizes.guard';
import {MatListModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';

const routes: Routes = [
    {
        path: '',
        component: PrizesComponent,
        canActivate: [PrizesGuard],
        children: [
            {
                path: ':prizeId',
                loadChildren: '../prize-detail/prize-detail.module#PrizeDetailModule',
            },
        ]
    },
];

@NgModule({
    declarations: [PrizesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatListModule,
        FlexModule,
    ]
})
export class PrizesModule {
}
