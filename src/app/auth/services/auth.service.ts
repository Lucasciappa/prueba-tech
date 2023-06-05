import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  //! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() { }

  private setAuthentication(user: User): boolean {

    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  login(email: string, password: string): Observable<boolean>{
    
    const url  = `${ this.baseUrl }/auth/login`;
    const body = { email, password };

    this.setAuthentication( body )

    return of(true);

  }

  logout() {
    this._currentUser.set(null);
    this._authStatus.set( AuthStatus.notAuthenticated );
  }

}
