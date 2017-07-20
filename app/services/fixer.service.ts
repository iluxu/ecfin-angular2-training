import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { FixerDetails } from './fixer-details.model';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class FixerService {
    private _latestCurrencies: Observable<FixerDetails>
    private defaultCurrency: string = "EUR"
    constructor(protected http: Http) {
    }

    public getCurrenciesByBase(): Observable<FixerDetails> {
        if (!this._latestCurrencies && this.defaultCurrency) {
            this._latestCurrencies = this.http.get('http://api.fixer.io/latest?base=' + this.defaultCurrency)
                .map(response => response.json())
                .publishReplay(1)
                .refCount()
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
        return this._latestCurrencies;
    }
}

