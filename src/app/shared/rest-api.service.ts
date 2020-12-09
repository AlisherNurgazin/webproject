import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Games } from './Games.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {
  }

  getGames(): Observable<Games> {
    return this.http.get<Games>(this.apiUrl + '/Games');
  }

  createGames(games): Observable<Games> {
    return this.http.post<Games>(this.apiUrl + '/Games', JSON.stringify(Games), this.httpOptions);
  }
}

