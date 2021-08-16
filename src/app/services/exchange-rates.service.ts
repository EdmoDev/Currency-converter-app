import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExchangeRatesResponse} from './payloads/exchange-rates-reponse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) {
  }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`http://api.exchangeratesapi.io/v1/latest?access_key=10ed0bab7428a4103310b6ac67f58e77`);
  }
}