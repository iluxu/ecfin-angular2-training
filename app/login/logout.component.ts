import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
@Component({
    moduleId: module.id,
    template: '<span>Logged out</span>'
})
export class LogoutComponent implements OnInit {
    constructor(private loginService: LoginService) { }

    public ngOnInit(): void {
        this.loginService.userLoggedOut();
    }
}
