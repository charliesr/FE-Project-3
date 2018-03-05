import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuotationsService {
  API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
       return this.httpClient.get(`${this.API_URL}/quotations/by-user`, options)
      .toPromise();
  }
  addTask(newQuotation) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/quotations/new`, {name: newQuotation}, options)
    .toPromise();
  }

  getOne(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/quotations/$(id)`, options)
      .toPromise();
  }

}
