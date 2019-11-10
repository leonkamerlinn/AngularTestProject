import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {PrizeItem} from '../models/prize-item';
import {PrizesActions, PrizesActionTypes} from './prizes.actions';


// Entity adapter
export const PrizesAdapter: EntityAdapter<PrizeItem> = createEntityAdapter<PrizeItem>();
export interface PrizesState extends EntityState<PrizeItem> {
    promotionStart: string | undefined;
    error: Error | undefined;
    showLoadingSpinner: boolean;
}


// Default data / initial state
const defaultPrizesState: PrizesState = {
    ids: [],
    entities: {},
    promotionStart: undefined,
    showLoadingSpinner: true,
    error: undefined,
};

export const initialState: PrizesState = PrizesAdapter.getInitialState(defaultPrizesState);

export function prizesReducer(state: PrizesState = initialState, action: PrizesActions): PrizesState {
    switch (action.type) {
        case PrizesActionTypes.LOAD_CONTENT_SUCCESS:
            const  [ prizesDataSource, promotionDataSource ] = action.payload;
            return PrizesAdapter.addAll(prizesDataSource.prizes, {
                ...state,
                promotionStart: promotionDataSource.promotion_start
            });

        case PrizesActionTypes.LOAD_CONTENT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case PrizesActionTypes.SHOW_LOADING_SPINNER:
            return {
                ...state,
                showLoadingSpinner: true
            };

        case PrizesActionTypes.HIDE_LOADING_SPINNER:
            return {
                ...state,
                showLoadingSpinner: false,
            };
        default:
            return state;
    }
}

export const getPrizesState = createFeatureSelector<PrizesState>('prizesState');
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = PrizesAdapter.getSelectors(getPrizesState);
