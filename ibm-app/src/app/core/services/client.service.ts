import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {AppConfig} from '../../configs/app.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getClients(): Observable<any> {
    return this.http.get(AppConfig.Api.CLIENT).pipe(
      map(this.extractData));
  }

  getClient(id): Observable<any> {
    return this.http.get(AppConfig.Api.CLIENT_CRUD + id).pipe(
      map(this.extractData));
  }

  addClient (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(AppConfig.Api.CLIENT, JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log('added Client w/ id=${product.id}')),
      catchError(this.handleError<any>('addClient'))
    );
  }

  updateClient (id, product): Observable<any> {
    return this.http.put(AppConfig.Api.CLIENT_CRUD + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated Client id=${id}`)),
      catchError(this.handleError<any>('updateClient'))
    );
  }

  deleteClient (id): Observable<any> {
    return this.http.delete<any>(AppConfig.Api.CLIENT_CRUD + id, httpOptions).pipe(
      tap(_ => console.log(`deleted Client id=${id}`)),
      catchError(this.handleError<any>('deleteClient'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log('${operation} failed: ${error.message}');
      // TODO: better job of transforming error for user consumption
      alert('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
