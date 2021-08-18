import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestService {

    constructor() {
    }

    async sendGetRequest(url: string, token?: string): Promise<any> {
        const response = await fetch(url, {
            headers: {
                'Authorization': token === undefined ? '' : 'Bearer ' + token,
                'Accept': "application/json",
                'Content-Type': "application/json"
            }
        });
        return response.json();
    }

    async sendPostRequest(url: string, body: any, token?: string): Promise<any> {
        const response = await fetch(url, {
            method: 'POST',
            body,
            headers: {
                'Authorization': token === undefined ? '' : 'Bearer ' + token,
                'Accept': "application/json",
                'Content-Type': "application/json"
            }
        });
        return response.json();
    }

    async sendPutRequest(url: string, body: any, token?: string): Promise<any> {
        const response = await fetch(url, {
            method: 'PUT',
            body,
            headers: {
                'Authorization': token === undefined ? '' : 'Bearer ' + token,
                'Accept': "application/json",
                'Content-Type': "application/json"
            }
        });
        return response.json();
    }

    async sendDeleteRequest(url: string, body: any, token?: string): Promise<any> {
        const response = await fetch(url, {
            method: 'DELETE',
            body,
            headers: {
                'Authorization': token === undefined ? '' : 'Bearer ' + token,
                'Accept': "application/json",
                'Content-Type': "application/json"
            }
        });
        return response.json();
    }
}
