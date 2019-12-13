import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceDetailComponent} from './price-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {PrizeDetailGuard} from './prize-detail.guard';
import {MatCardModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: PriceDetailComponent,
        canActivate: [PrizeDetailGuard]
    }
];

@NgModule({
    declarations: [PriceDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
    ]
})
export class PrizeDetailModule {
}
