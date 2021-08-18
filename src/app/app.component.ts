import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from "./helpers/http-request/http-request.service";
import {TokenService} from "./services/token/token.service";
import {GetEventsService} from "./services/get-events/get-events.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'api-eventdrive';

    constructor(private getEventsService: GetEventsService) {
    }

    ngOnInit(): void {
        this.init().then();
    }

    async init(){
        console.log( await this.getEventsService.getEvents());
    }
}
