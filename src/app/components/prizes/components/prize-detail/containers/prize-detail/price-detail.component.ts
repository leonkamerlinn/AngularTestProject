import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../app-state.model';
import {Observable} from 'rxjs';
import {PrizeDetailState} from './store/prize-detail.reducer';

@Component({
    selector: 'app-price-detail',
    templateUrl: './price-detail.component.html',
    styleUrls: ['./price-detail.component.css']
})
export class PriceDetailComponent implements OnInit {
    state$: Observable<PrizeDetailState>;
    private BASE_CONTENT_URL = 'https://pan.playad.co';
    constructor(private store: Store<AppState>) {
        this.state$ = this.store.select(appState => appState.prizeDetailState);
    }

    public getAbsoluteImageUrl(relativeUrl: string) {
        return `${this.BASE_CONTENT_URL}${relativeUrl}`;
    }

    ngOnInit() {
    }

}
