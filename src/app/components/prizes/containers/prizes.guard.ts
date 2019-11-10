import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {PrizesService} from './prizes.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app-state.model';
import {LoadContent} from './store/prizes.actions';


@Injectable({
    providedIn: 'root'
})
export class PrizesGuard implements CanActivate {
    constructor(private service: PrizesService, private store: Store<AppState>) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.store.dispatch(new LoadContent());
        return of(true);
    }
}
