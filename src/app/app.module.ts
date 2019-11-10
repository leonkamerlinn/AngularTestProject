import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './index';
import {CustomRouterStateSerializer} from './router-serializer';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {PrizesEffects} from './components/prizes/containers/store/prizes.effects';
import {PrizeDetailEffects} from './components/prizes/components/prize-detail/containers/prize-detail/store/prize-detail.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'prizes',
    },
    {
        path: 'prizes',
        loadChildren: './components/prizes/prizes.module#PrizesModule',
    },
    {
        path: '**',
        loadChildren: './components/not-found/not-found.module#NotFoundModule',
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([PrizesEffects, PrizeDetailEffects]),
        StoreRouterConnectingModule.forRoot({serializer: CustomRouterStateSerializer}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
