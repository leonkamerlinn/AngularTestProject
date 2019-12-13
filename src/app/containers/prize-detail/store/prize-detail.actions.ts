import {Action} from '@ngrx/store';
import {PrizeDetail} from '../../prizes/models/prize-detail';


export enum PrizeDetailActionTypes {
    LOAD_ITEM = '[Prize Detail] Load Item',
    LOAD_ITEM_SUCCESS = '[Prize Detail] Load Item Success',
    LOAD_ITEM_FAILURE = '[Prize Detail] Load Item Failure',
    SHOW_LOADING_SPINNER = '[Prize Detail] Show Loading Spinner',
    HIDE_LOADING_SPINNER = '[Prize Detail] Hide Loading Spinner'
}



export class LoadItem implements Action {
    readonly type = PrizeDetailActionTypes.LOAD_ITEM;
    public constructor(public payload: number) {}
}

export class LoadItemSuccess implements Action {
    readonly type = PrizeDetailActionTypes.LOAD_ITEM_SUCCESS;
    public constructor(public payload: PrizeDetail) {}
}

export class LoadItemFailure implements Action {
    readonly type = PrizeDetailActionTypes.LOAD_ITEM_FAILURE;
    public constructor(public payload: Error) {}
}

export class ShowLoadingSpinner implements Action {
    readonly type = PrizeDetailActionTypes.SHOW_LOADING_SPINNER;
}

export class HideLoadingSpinner implements Action {
    readonly type = PrizeDetailActionTypes.HIDE_LOADING_SPINNER;
}




export type PrizeDetailActions =
    | LoadItem
    | LoadItemSuccess
    | LoadItemFailure
    | ShowLoadingSpinner
    | HideLoadingSpinner;

