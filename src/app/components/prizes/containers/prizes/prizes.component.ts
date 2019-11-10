import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app-state.model';
import {Observable} from 'rxjs';
import {PrizeItem} from '../models/prize-item';
import * as fromReducer from '../store/prizes.reducer';
import {PrizesState} from '../store/prizes.reducer';


@Component({
    selector: 'app-prizes',
    templateUrl: './prizes.component.html',
    styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {
    state$: Observable<PrizesState>;
    items$: Observable<Array<PrizeItem>>;

    constructor(private store: Store<AppState>) {
        this.state$ = this.store.select(appState => appState.prizesState);
        this.items$  = this.store.select(fromReducer.selectAll);
    }



    ngOnInit() {
    }

}
