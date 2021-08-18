import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from "./helpers/http-request/http-request.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'api-eventdrive';

    constructor(private httpRequestService: HttpRequestService) {
    }

    ngOnInit(): void {
        this.init().then();
    }

    async init(){
        const result = await this.httpRequestService.sendGetRequest("https://api.dev.eventdrive.com/public/v1/events");
        console.log(result);
    }
}
