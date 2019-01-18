import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {AppConfig} from '../../configs/app.config';
import {Client} from '../../shared/models/client.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

/**
 * Service  client
 * @author juancallejasduque@gmail.com
 */
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getClientLinks(): Observable<any> {
    return this.http.get(AppConfig.Api.PAGE).pipe(
      map(this.extractData));
  }

  getClientLink(id): Observable<any> {
    return this.http.get(AppConfig.Api.PAGE_CRUD + id).pipe(
      map(this.extractData));
  }

  addClientLink (client): Observable<any> {
    console.log(client);
    return this.http.post<any>(AppConfig.Api.PAGE, JSON.stringify(client), httpOptions).pipe(
      tap((Client) => console.log('added ClientLink w/ id=${product.id}')),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateClientLink (id, client): Observable<any> {
    return this.http.put(AppConfig.Api.PAGE_CRUD + id, JSON.stringify(client), httpOptions).pipe(
      tap(_ => console.log(`updated ClientLink id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteClientLink (id): Observable<any> {
    return this.http.delete<any>(AppConfig.Api.PAGE_CRUD + id, httpOptions).pipe(
      tap(_ => console.log(`deleted ClientLink id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      console.log('${operation} failed: ${error.message}');
      // TODO: better job of transforming error for user consumption
      alert('${operation} failed: ${error.message}');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}