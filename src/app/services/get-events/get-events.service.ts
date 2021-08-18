import {Injectable} from '@angular/core';
import {HttpRequestService} from "../../helpers/http-request/http-request.service";
import {TokenService} from "../token/token.service";
import {environment} from "../../../environments/environment";
import {GetEventsResponse} from "../../models/get-events-response";

@Injectable({
    providedIn: 'root'
})
export class GetEventsService {

    constructor(private httpRequestService: HttpRequestService, private tokenService: TokenService) {
    }

    async getEvents(): Promise<GetEventsResponse> {
        return  this.httpRequestService.sendGetRequest(
            environment.apiUrl + 'events',
            await this.tokenService.getToken()
        );
    }
}
