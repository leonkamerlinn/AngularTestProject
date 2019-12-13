import {RouterReducerState} from '@ngrx/router-store';
import {RouterState} from './router-serializer';
import {PrizesState} from './containers/prizes/store/prizes.reducer';
import {PrizeDetailState} from './containers/prize-detail/store/prize-detail.reducer';


export interface AppState {
    readonly routerState: RouterReducerState<RouterState>;
    readonly prizesState: PrizesState;
    readonly prizeDetailState: PrizeDetailState;
}
