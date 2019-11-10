import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {prizesReducer} from './components/prizes/containers/store/prizes.reducer';
import {AppState} from './app-state.model';
import {prizeDetailReducer} from './components/prizes/components/prize-detail/containers/prize-detail/store/prize-detail.reducer';


export const reducers: ActionReducerMap<AppState> = {
    routerState: routerReducer,
    prizesState: prizesReducer,
    prizeDetailState: prizeDetailReducer
};


