import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SessionService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly SESSION_API = `${SessionService.BASE_API}/session`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: SessionService.defaultHeaders, withCredentials: true });

  constructor(private http: Http) {}

  authenticate(user: User): Observable<User> {
    return this.http
      .post(SessionService.SESSION_API, JSON.stringify(user), SessionService.defaultOptions)
      .map((res: Response) => res.json())
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
