import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
})
export class AdminComponent implements OnInit {
    private adminChangeCurrency: boolean;
    constructor(private loginService: LoginService) { }

    public ngOnInit(): void {

    }
}
