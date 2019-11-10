import {RouterReducerState} from '@ngrx/router-store';
import {RouterState} from './router-serializer';
import {PrizesState} from './components/prizes/containers/store/prizes.reducer';
import {PrizeDetailState} from './components/prizes/components/prize-detail/containers/prize-detail/store/prize-detail.reducer';


export interface AppState {
    readonly routerState: RouterReducerState<RouterState>;
    readonly prizesState: PrizesState;
    readonly prizeDetailState: PrizeDetailState;
}
