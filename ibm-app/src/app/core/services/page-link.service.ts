import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {AppConfig} from '../../configs/app.config';
import {PageLink} from '../../shared/models/page-link.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

/**
 * Service  PageLink
 * @author juancallejasduque@gmail.com
 */
@Injectable({
  providedIn: 'root'
})
export class PageLinkService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPageLinks(): Observable<any> {
    return this.http.get(AppConfig.Api.PAGE).pipe(
      map(this.extractData));
  }

  getPageLink(id): Observable<any> {
    return this.http.get(AppConfig.Api.PAGE_CRUD + id).pipe(
      map(this.extractData));
  }

  addPageLink (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(AppConfig.Api.PAGE, JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log('added pageLink w/ id=${product.id}')),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updatePageLink (id, product): Observable<any> {
    return this.http.put(AppConfig.Api.PAGE_CRUD + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated pageLink id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deletePageLink (id): Observable<any> {
    return this.http.delete<any>(AppConfig.Api.PAGE_CRUD + id, httpOptions).pipe(
      tap(_ => console.log(`deleted pageLink id=${id}`)),
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
