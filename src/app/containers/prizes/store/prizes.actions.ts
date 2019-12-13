import {Action} from '@ngrx/store';
import {PrizesDataSource, PromotionDataSource} from '../prizes.service';


export enum PrizesActionTypes {
    LOAD_CONTENT = '[Prizes] Load Content',
    LOAD_CONTENT_SUCCESS = '[Prizes] Load Content Success',
    LOAD_CONTENT_FAILURE = '[Prizes] Load Content Failure',
    SHOW_LOADING_SPINNER = '[Prizes] Show Loading Spinner',
    HIDE_LOADING_SPINNER = '[Prizes] Hide Loading Spinner'
}



export class LoadContent implements Action {
    readonly type = PrizesActionTypes.LOAD_CONTENT;
}

export class LoadContentSuccess implements Action {
    readonly type = PrizesActionTypes.LOAD_CONTENT_SUCCESS;
    public constructor(public payload: [PrizesDataSource, PromotionDataSource]) {}
}

export class LoadContentFailure implements Action {
    readonly type = PrizesActionTypes.LOAD_CONTENT_FAILURE;
    public constructor(public payload: Error) {}
}

export class ShowLoadingSpinner implements Action {
    readonly type = PrizesActionTypes.SHOW_LOADING_SPINNER;
}

export class HideLoadingSpinner implements Action {
    readonly type = PrizesActionTypes.HIDE_LOADING_SPINNER;
}




export type PrizesActions =
    | LoadContent
    | LoadContentSuccess
    | LoadContentFailure
    | ShowLoadingSpinner
    | HideLoadingSpinner;

