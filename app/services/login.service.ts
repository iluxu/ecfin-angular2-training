import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { IUsersJSON, IUser } from './user-details.model';
import { IUserKeycode } from '../shared/interfaces';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    private _users: Observable<IUserKeycode[]>
    private logged: boolean
    private subject: Subject<boolean> = new Subject<boolean>();
    constructor(protected http: Http) {
    }

    public getUsers(): Observable<IUserKeycode[]> {
        if (!this._users) {
            this._users = this.http.get('../app/data/users.json')
                .map(response => response.json() as IUsersJSON)
                .map(usersjson => {
                    return Object.getOwnPropertyNames(usersjson.users).map((user) => ({ username: user, keycode: usersjson.users[user] }))
                })
                .publishReplay(1)
                .refCount()
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
        return this._users;
    }

    public checkLogin(): Observable<boolean> {
        return this.subject.asObservable();
    }

    public userLogged() {
        this.logged = true;
        this.subject.next(true);
    }

    public userLoggedOut() {
        this.logged = false;
        this.subject.next(false);
    }

    public isAdmin(): boolean {
        return this.logged;
    }
}

