import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {PrizesService} from '../../../../containers/prizes.service';
import {AppState} from '../../../../../../app-state.model';
import {switchMap, take} from 'rxjs/operators';
import {LoadItem} from './store/prize-detail.actions';


@Injectable({
    providedIn: 'root'
})
export class PrizeDetailGuard implements CanActivate {
    constructor(private service: PrizesService, private store: Store<AppState>) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select(appState => appState.routerState.state).pipe(
            take(1),
            switchMap((routerState) => {
                const id = routerState.params.prizeId;

                if (id !== undefined) {
                    this.store.dispatch(new LoadItem(id));
                    return of(true);
                }

                return of(false);
            })
        );

    }
}
