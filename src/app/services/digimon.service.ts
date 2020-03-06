import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject} from 'rxjs';
import { DigiDetails } from '../interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  
  digiAPI: any;

  searchData = new BehaviorSubject<string>('');
  observableSearchData$ = this.searchData.asObservable();

  constructor(private http: HttpClient) { 
    this.digiAPI = environment.api;
  }

    getDigimon(): Observable <DigiDetails> {
      return this.http
        .get<DigiDetails>(`${this.digiAPI}`)
        .pipe(catchError(this._handleError)); 
    }
    
    getDigimonId(id: number) {
      return this.http.get<number>(`${this.digiAPI}/id/${id}`);
    }

    getDigimonName(name: string) {
      return this.http.get<string>(`${this.digiAPI}/name/${name}`);
    }

    getDigimonLevel(level: string) {
      return this.http.get<string>(`${this.digiAPI}/level/${level}`);
    }


    private _handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    }
}
