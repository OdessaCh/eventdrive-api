import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from "./helpers/http-request/http-request.service";
import {TokenService} from "./services/token/token.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'api-eventdrive';

    constructor(private httpRequestService: HttpRequestService, private tokenService: TokenService) {
    }

    ngOnInit(): void {
        this.init().then();
    }

    async init(){
        const token = await this.tokenService.getToken('25', 'FgR7rnRi9AWe3Y0sgrQhLLJKEA0PQQJxdoyKqSxH');
        console.log(token);
    }
}
