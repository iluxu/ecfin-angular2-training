import { Component, OnInit } from '@angular/core';
import { TabMenuModule, MenuItem } from 'primeng/primeng';
import { OnChanges } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'nav-bar',
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
})
export class NavBarComponent implements OnInit {
    public items: MenuItem[];

    constructor(private loginService: LoginService) { }

    public ngOnInit(): void {
        this.items = [
            { label: 'Currency List', icon: 'fa-bar-chart', routerLink: ['/currencyList'] },
            { label: 'Currency Transaction', icon: 'fa fa-exchange', routerLink: ['/currencyTransaction'] },
            { label: 'Admin', icon: 'fa fa-lock', routerLink: ['/admin'] },
            { label: 'Login', icon: 'fa fa-sign-in', routerLink: ['/login'] }
        ];
        this.loginService.checkLogin().subscribe((logged: boolean) => {
            if (logged) {
                this.items.splice(-1, 1);
                this.items.push({ label: 'Logout', icon: 'fa fa-sign-out', routerLink: ['/logout'] });
            }
            else {
                this.items.splice(-1, 1);
                this.items.push({ label: 'Login', icon: 'fa fa-sign-in', routerLink: ['/login'] });
            }
        })

    }
}
