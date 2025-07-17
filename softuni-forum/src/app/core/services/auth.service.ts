import { Injectable, signal } from "@angular/core";
import { User } from "../../models";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private _isLoggeIn = signal<boolean>(false)
    private _currentUser = signal<User | null>(null)
    private _users: User[] = [
        { id: '5fa64b162183ce1728ff371d', username: 'Johny' },
        { id: '5fa64a072183ce1728ff3719', username: 'David' },
        { id: '5fa64b972183ce1728ff3720', username: 'Donald' }
    ]

    public isLoggedIn = this._isLoggeIn.asReadonly()
    public currentUser = this._currentUser.asReadonly()

    constructor() {
        const savedUser = localStorage.getItem('currentUser')
        if (savedUser) {
            const user = JSON.parse(savedUser)
            this._currentUser.set(user)
            this._isLoggeIn.set(true)
        }
    }

    login(email: string, password: string): boolean {
        if (email && password) {
            const user = this._users[0]
            this._currentUser.set(user)
            this._isLoggeIn.set(true)

            localStorage.setItem('currentUser', JSON.stringify(user))

            return true
        }

        return false
    }

    register(
        username: string
        , email: string
        , password: string,
        phone: string,
        rePasword: string): boolean {
        if (username && email && password && phone && rePasword ) {
            const newUser: User = {
                id: `user_${Date.now()}`,
                username: username
            }

            this._users.push(newUser)
            this._currentUser.set(newUser)
            this._isLoggeIn.set(true)

            localStorage.setItem('currentUser', JSON.stringify(newUser))

            return true
        }

        return false

    }

    logout(): void {
        this._currentUser.set(null)
        this._currentUser.set(null)
        localStorage.removeItem('currentUser')
    }

    getCurrentUserId():string | null{
       return this._currentUser()?.id || null
    }
}