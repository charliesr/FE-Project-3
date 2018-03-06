import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl + '/quotations';


@Injectable()
export class QuotationsService {


  constructor(private httpClient: HttpClient) {}

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
       return this.httpClient.get(`${apiUrl}/by-user`, options)
      .toPromise();
  }
  getFullList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/list-all`, options)
      .toPromise();
  }
  addTask(newQuotation) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}/new`, {name: newQuotation}, options)
    .toPromise();
  }

  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options )
      .toPromise();
  }
  updateQuotation(data, id) {
    const options = {
      withCredentials: true
    };
    const newData = {
      price: data,
    };
    return this.httpClient.post(`${apiUrl}/${id}`, newData, options)
      .toPromise();
  }
}
