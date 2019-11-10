import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';


export interface UrlParam {
    prizeId: number | undefined;
}

export interface RouterState {
    url: string;
    params: UrlParam;
    queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterState> {
    serialize(routerState: RouterStateSnapshot): RouterState {

        const { url } = routerState;
        const { queryParams } = routerState.root;
        let params: UrlParam;
        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;

            const reg = /^(\/prizes\/)?([0-9]+)?/;
            if (reg.test(url)) {
                const arr = url.match(reg);
                console.log(arr);
                params = {
                    prizeId: (arr[2] !== undefined) ? Number(arr[2]) : undefined
                };
            }
        }
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
}
