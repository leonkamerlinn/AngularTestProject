import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest} from 'rxjs';
import {PrizeItem} from './models/prize-item';
import {PrizeDetail} from './models/prize-detail';


export interface PrizesDataSource {
    success: boolean;
    prizes: Array<PrizeItem>;
}

export interface PrizeDetailDataSource {
    success: boolean;
    prize: PrizeDetail;
}

export interface PromotionDataSource {
    success: boolean;
    promotion_start: string;
}

@Injectable({
    providedIn: 'root'
})
export class PrizesService {
    private BASE_API_URL = 'https://pan.playad.co/api';

    constructor(private http: HttpClient) {
    }

    getPrizes() {
        return this.http.get<PrizesDataSource>(`${this.BASE_API_URL}/prizes/teaser`);
    }

    getPrize(id: number) {
        return this.http.get<PrizeDetailDataSource>(`${this.BASE_API_URL}/prizes/teaser/${id}`);
    }

    getPromotion() {
        return this.http.get<PromotionDataSource>(`${this.BASE_API_URL}/settings/promotion`);
    }

    getPrizesAndPromotion() {
        return combineLatest(this.getPrizes(), this.getPromotion());
    }
}
