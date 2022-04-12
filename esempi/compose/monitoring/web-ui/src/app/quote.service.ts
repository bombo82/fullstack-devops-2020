import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from './quote';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient: HttpClient) { }
  list(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(environment.apiUrl);
  }

  create(model: Quote): Observable<Quote | string> {
    return this.httpClient.post<Quote | string>(environment.apiUrl, model);
  }
}
