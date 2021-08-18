import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpRequestService} from "../../helpers/http-request/http-request.service";


@Injectable({
    providedIn: 'root'
})
export class TokenService {
    constructor(private httpRequestService: HttpRequestService) {
    }

    async getToken(): Promise<string> {
        const response = await this.httpRequestService.sendPostRequest(
            environment.apiUrl + 'token',
            JSON.stringify({
                client_id: environment.client_id,
                client_secret: environment.client_secret
            })
        );
        return response.access_token;
    }
}
