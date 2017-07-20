import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { FixerService } from '../services/fixer.service'
import { FixerDetails, IRate } from '../services/fixer-details.model';
import { ISelectedCurrency } from '../shared/interfaces';

@Component({
    selector: 'currencies-dropdown',
    moduleId: module.id,
    templateUrl: 'currenciesDropdown.component.html',
})
export class CurrenciesDropdownComponent implements OnInit {
    @Output() public changeCurrency = new EventEmitter();
    private currencies: SelectItem[] = [];
    private selectedCurrency: string;
    private rates: IRate
    constructor(private fixerService: FixerService) {
    }

    public ngOnInit(): void {
        this.fixerService.getCurrenciesByBase().subscribe(
            (fixerDetails: FixerDetails) => {
                this.rates = fixerDetails.rates;
                this.currencies = Object.getOwnPropertyNames(fixerDetails.rates).map((currency) => {
                    return { label: currency, value: currency };
                })
                this.currencyChanged(this.currencies[0].label);
            },
            error => {
                console.log(error);
            });
    }

    public currencyChanged(event: string): void {
        const oneCurrency: ISelectedCurrency = { currency: event, rate: this.rates[event] }
        this.changeCurrency.emit(oneCurrency);
    }
}
