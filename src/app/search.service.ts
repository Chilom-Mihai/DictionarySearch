import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Words } from './home/home.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchApi = 'https://api.dictionaryapi.dev/api/v2/entries/en'

  constructor(private http: HttpClient) { }

  gethWord(word: string): Observable<Words[]> {
    const url = `${this.searchApi}/${word}`;
    return this.http.get<Words[]>(url).pipe(
      tap(data => console.log(data)))
  }
}
