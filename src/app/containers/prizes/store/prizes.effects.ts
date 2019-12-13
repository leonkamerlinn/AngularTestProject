import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PrizesService} from '../prizes.service';
import {AppState} from '../../../app-state.model';
import {HideLoadingSpinner, LoadContent, LoadContentFailure, LoadContentSuccess, PrizesActionTypes} from './prizes.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {from, of} from 'rxjs';


@Injectable()
export class PrizesEffects {
    constructor(private actions$: Actions, private service: PrizesService, private store: Store<AppState>) {}

    @Effect()
    loadContent$ = this.actions$.pipe(
        ofType<LoadContent>(PrizesActionTypes.LOAD_CONTENT),
        mergeMap(
            () => from(this.service.getPrizesAndPromotion()).pipe(
                map(data => new LoadContentSuccess(data)),
                catchError(err => of(new LoadContentFailure(err)))
            )
        )
    );


    @Effect()
    loadContentSuccess$ = this.actions$.pipe(
        ofType<LoadContentSuccess>(PrizesActionTypes.LOAD_CONTENT_SUCCESS),
        map(() => new HideLoadingSpinner())
    );
}
