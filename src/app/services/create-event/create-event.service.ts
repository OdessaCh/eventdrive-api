import {Injectable} from '@angular/core';
import {HttpRequestService} from "../../helpers/http-request/http-request.service";
import {TokenService} from "../token/token.service";
import {GetEventsResponse} from "../../models/get-events-response";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CreateEventService {

    constructor(private httpRequestService: HttpRequestService, private tokenService: TokenService) {
    }

    async createEvent(): Promise<any> {
        return this.httpRequestService.sendGetRequest(
            environment.apiUrl + 'events',
            await this.tokenService.getToken()
        );
    }
}
