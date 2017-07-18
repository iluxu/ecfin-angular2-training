import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';
import { IUserKeycode } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
    private display: boolean = true;
    private welcomeMsg: string;
    private userName: string;
    private keyCode: number;
    private errorMessage: boolean;
    private errorText: string;
    constructor(private loginService: LoginService, private router: Router) { }

    public ngOnInit(): void {
        this.display = true;
        this.errorMessage = false;
    }

    public connection(): void {
        this.loginService.getUsers().subscribe(
            (usersResult: IUserKeycode[]) => {
                usersResult = usersResult.filter((x) => { return x.keycode == this.keyCode && x.username === this.userName })
                if (usersResult.length > 0) {
                    this.loginService.userLogged();
                    this.display = false;
                    this.welcomeMsg = "Welcome " + usersResult[0].username;
                }
                else {
                    this.errorMessage = true;
                    this.errorText = "Invalid Username/Keycode"
                }
            },
            error => {
                console.log(error);
            });

    }
}
