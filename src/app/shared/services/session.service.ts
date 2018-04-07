import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly SESSION_API = `${SessionService.BASE_API}/session`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: SessionService.defaultHeaders, withCredentials: true });

  private user: User;
  private userSubject: Subject<User> = new Subject();
  
  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    this.notifyUserChanges();
  }

  authenticate(user: User): Observable<User> {
    return this.http
      .post(SessionService.SESSION_API, JSON.stringify(user), SessionService.defaultOptions)
      .map(res => {
        return this.doAuthentication(res.json());
      })
      .catch(error => this.handleError(error));
  }

  logout(): Observable<void> {
    return this.http
      .delete(SessionService.SESSION_API, SessionService.defaultOptions)
      .map(res => {
        return this.doLogout();
      })
      .catch(error => this.handleError(error));
  }

  isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  getUser(): User {
    return this.user;
  }

  onUserChanges(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private doAuthentication(user: User): User {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    this.notifyUserChanges();
    return this.user;
  }

  protected doLogout(): void {
    this.user = null;
    localStorage.removeItem(CURRENT_USER_KEY);
    this.notifyUserChanges();
  }

  private notifyUserChanges() {
    this.userSubject.next(this.user);
  }


  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(`SessionService error: ${error}`);
    }
    const errorData = error.json();
    errorData.status = error.status;
    console.error(errorData);
    return Observable.throw(errorData);
  }
}
