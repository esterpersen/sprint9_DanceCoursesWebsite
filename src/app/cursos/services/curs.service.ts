import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { Curs } from '../interfaces/curs.interface';

@Injectable({
  providedIn: 'root'
})
export class CursService {

  private cursosUrl = 'api/cursos'; // URL to web api

  constructor(private http: HttpClient) { }

  //* CURSOS FROM IN-MEMORY-DATA.SERVICE
  getCursos(): Observable<Curs[]> {
    return this.http.get<Curs[]>(this.cursosUrl).pipe(
      tap((_) => console.log('fetched all courses')),
      catchError(this.handleError<Curs[]>('getCursos', []))
    );
  }

  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
