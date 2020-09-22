import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {User} from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = 'https://5f68729edc0bff0016f43713.mockapi.io/m2i/api/' ;

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } ;
  constructor(public httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient
        .get<User[]>(this.apiBaseUrl + '/users') // OBSERVER/OBSERVABLE
        .pipe(
            retry(2),
            catchError(this.handleError)
        ) ;
  }

  getOne(id: number): Observable<User> {
    return this.httpClient
        .get<User>(this.apiBaseUrl + '/users/' + id)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
  }

  // Create a new item
  create(user: User): Observable<User> {
    return this.httpClient
        .post<User>(this.apiBaseUrl + '/users', JSON.stringify(user), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        ) ;
  }

  update(user: User){
    return this.httpClient
        .put<User>(this.apiBaseUrl + '/users/' + user.id, JSON)
  }

  delete(userID: number): Observable<User> {
    return this.httpClient
        .delete<User>(this.apiBaseUrl + '/users/' + userID)
        .pipe(
            retry(2),
            catchError(this.handleError)
        ) ;
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
        'Something bad happened; please try again later.');
  }
}
