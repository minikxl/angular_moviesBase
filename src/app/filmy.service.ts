import { Injectable } from '@angular/core';
import { Film } from './modele/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [];
  private baseURL: string = environment.apiURL;
  private token: string = 'aa041f409688f9e84548185c0dbe8a4bd36cb82b';
  private httpHeaders = new HttpHeaders({
    'Authorization': `Token ${this.token}`
  });


  constructor(private http: HttpClient) { }

  wszystkieFilmy(): Observable<any> {
    return this.http.get(this.baseURL + '/api/filmy/',
    {headers: this.httpHeaders});
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseURL}/api/filmy/${id}/`);
  }
}
