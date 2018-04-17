import { Observable } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable()
export class UsersService  {
  private static readonly USERS_API = `${environment.baseApi}/users`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: UsersService.defaultHeaders, withCredentials: true });

  constructor(private http: Http) {
  
  }

  create(user: User): Observable<User> {
    return this.http.post(UsersService.USERS_API, JSON.stringify(user), UsersService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
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