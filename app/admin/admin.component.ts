import { Component, OnInit } from '@angular/core';
import { FixerService } from '../services/fixer.service';
import { LoginService } from '../services/login.service';
import { ISelectedCurrency } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
})
export class AdminComponent implements OnInit {
    private adminChangeCurrency: boolean;
    constructor(private fixerService: FixerService, private loginService: LoginService) { }

    public ngOnInit(): void {

    }

    public changeBaseCurrency(emittedCurrency: ISelectedCurrency): void {
        this.fixerService.changeBaseCurrency(emittedCurrency.currency);
    }
    public setChange(): void {
        this.adminChangeCurrency = true;
    }
}
