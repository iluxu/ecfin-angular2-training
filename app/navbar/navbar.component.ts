import { Component, OnInit } from '@angular/core';
import { TabMenuModule, MenuItem } from 'primeng/primeng';

@Component({
    selector: 'nav-bar',
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
})
export class NavBarComponent implements OnInit {
    public items: MenuItem[];

    constructor() { }

    public ngOnInit(): void {
        this.items = [
            { label: 'Currency List', icon: 'fa-bar-chart', routerLink: ['/currencyList'] },
            { label: 'Currency Transaction', icon: 'fa fa-exchange', routerLink: ['/currencyTransaction'] },
            { label: 'Admin', icon: 'fa fa-lock', routerLink: ['/admin'] },
            { label: 'Login', icon: 'fa fa-sign-in', routerLink: ['/login'] }
        ];
    }
}
