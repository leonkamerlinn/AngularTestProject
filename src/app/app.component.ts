import {Component, OnInit} from '@angular/core';
import {PrizesService} from './containers/prizes/prizes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private service: PrizesService) {
    }

    ngOnInit(): void {
    }
}
