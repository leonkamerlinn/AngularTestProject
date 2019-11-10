import {PrizeDetail} from '../../../../../containers/models/prize-detail';
import {PrizeDetailActions, PrizeDetailActionTypes} from './prize-detail.actions';


export interface PrizeDetailState {
    detail: PrizeDetail | undefined;
    showLoadingSpinner: boolean;
    error: Error | undefined;
}

// Default data / initial state
export const initialState: PrizeDetailState = {
    detail: undefined,
    showLoadingSpinner: true,
    error: undefined,
};

export function prizeDetailReducer(state: PrizeDetailState = initialState, action: PrizeDetailActions): PrizeDetailState {
    switch (action.type) {
        case PrizeDetailActionTypes.LOAD_ITEM_SUCCESS:
            return {
                ...state,
                detail: action.payload
            };

        case PrizeDetailActionTypes.LOAD_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case PrizeDetailActionTypes.SHOW_LOADING_SPINNER:
            return {
                ...state,
                showLoadingSpinner: true
            };

        case PrizeDetailActionTypes.HIDE_LOADING_SPINNER:
            return {
                ...state,
                showLoadingSpinner: false
            };
        default:
            return state;
    }
}
