import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { FixerService } from '../services/fixer.service'
import { RatePipe } from '../shared/keys.pipe';
import { ISelectedCurrency } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    templateUrl: 'currency-transaction.component.html',
})
export class CurrencyTransactionComponent implements OnInit {
    private selectedCurrency: string;
    private inputAmount: number = 0;
    private convertedAmount: number;
    private rate: number;
    constructor(private fixerService: FixerService, private RatePipe: RatePipe) {
    }

    public ngOnInit(): void {
    }

    public amountChanged(inputAmount: number): void {
        this.inputAmount = inputAmount;
        this.currencyTransaction();
    }

    public currencyChanged(selectedCurrency: ISelectedCurrency): void {
        this.selectedCurrency = selectedCurrency.currency;
        this.rate = selectedCurrency.rate;
        this.currencyTransaction();
    }

    public currencyTransaction(): void {
        this.convertedAmount = this.inputAmount * this.rate;
    }
}
