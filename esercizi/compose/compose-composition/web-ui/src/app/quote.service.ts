import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  list(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.url);
  }

  create(model: Quote): Observable<Quote | string> {
    return this.httpClient.post<Quote | string>(this.url, model);
  }
}
