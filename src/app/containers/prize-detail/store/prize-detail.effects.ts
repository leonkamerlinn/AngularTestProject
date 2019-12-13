import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PrizesService} from '../../prizes/prizes.service';
import {AppState} from '../../../app-state.model';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {HideLoadingSpinner, LoadItem, LoadItemFailure, LoadItemSuccess, PrizeDetailActionTypes} from './prize-detail.actions';


@Injectable()
export class PrizeDetailEffects {
    constructor(private actions$: Actions, private service: PrizesService, private store: Store<AppState>) {}


    @Effect()
    loadItem$ = this.actions$.pipe(
        ofType<LoadItem>(PrizeDetailActionTypes.LOAD_ITEM),
        mergeMap(
            (action) => from(this.service.getPrize(action.payload)).pipe(
                map(data => new LoadItemSuccess(data.prize)),
                catchError(err => of(new LoadItemFailure(err)))
            )
        )
    );


    @Effect()
    loadItemSuccess$ = this.actions$.pipe(
        ofType<LoadItemSuccess>(PrizeDetailActionTypes.LOAD_ITEM_SUCCESS),
        map(() => new HideLoadingSpinner())
    );
}
