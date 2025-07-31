import { Injectable, signal } from "@angular/core";
import { ApiUser, User } from "../../models";
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
      private apiUrl = 'http://localhost:3000/api'
    private _isLoggeIn = signal<boolean>(false)
    private _currentUser = signal<User | null>(null)

    public isLoggedIn = this._isLoggeIn.asReadonly()
    public currentUser = this._currentUser.asReadonly()

    constructor( private httpClient:HttpClient) {
        const savedUser = localStorage.getItem('currentUser')
        if (savedUser) {
            const user = JSON.parse(savedUser)
            this._currentUser.set(user)
            this._isLoggeIn.set(true)
        }
    }

    login(email: string, password: string): Observable<User> {
        return this.httpClient.post<ApiUser>(`${this.apiUrl}/login`,{ email,password } , {
            withCredentials: true
        }).pipe(
            map(apiUser => this.mapApiUserToUser(apiUser)),
            tap(user => {
                this._currentUser.set(user)
                this._isLoggeIn.set(true)

                localStorage.setItem('currentUser', JSON.stringify(user))
            })
        )
    }

    register(
        username: string, 
        email: string,
         password: string,
         phone: string,
         rePasword: string
        ): Observable<User> {
            return this.httpClient.post<ApiUser>(`${this.apiUrl}/register`,{
                username,
                email,
                tel:phone,
                password,
                rePasword
            },{
                withCredentials:true
            }).pipe(
                map(apiUser => this.mapApiUserToUser(apiUser)),
                tap(user =>{
                    this._currentUser.set(user)
                    this._isLoggeIn.set(true)

                    localStorage.setItem('currentUser', JSON.stringify(user))
                })
            )
      

    }

 logout(): void {
        this._currentUser.set(null);
        this._isLoggeIn.set(false);
        localStorage.removeItem('currentUser');
    }

    getCurrentUserId():string | null{
       return this._currentUser()?.id || null
    }

    update(user: User): void {
        const userIndex = this._users.findIndex(u => u.id === user.id);

        if (userIndex !== -1) {
            this._users[userIndex] = user;
        }

        this._currentUser.set(user);

        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    private mapApiUserToUser(apiUser:ApiUser): User{
        return <User>{
            id:apiUser._id,
            username:apiUser.username,
            email:apiUser.email,
            phone:apiUser.tel
        }
    }
}