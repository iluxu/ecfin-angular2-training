import { Component, OnInit } from '@angular/core';
import { FixerService } from '../services/fixer.service'
import { IRate, FixerDetails } from '../services/fixer-details.model';

@Component({
    moduleId: module.id,
    templateUrl: 'currency-list.component.html',
})
export class CurrencyListComponent implements OnInit {
    private currencyList: IRate;
    constructor(private fixerService: FixerService) { }

    public ngOnInit(): void {
        this.fixerService.getCurrenciesByBase().subscribe(
            (fixerDetails: FixerDetails) => {
                this.currencyList = fixerDetails.rates;
            },
            error => {
                console.log(error);
            });
    }
}
