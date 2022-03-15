import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CharactersApiService {
  TIME_STAMP= '1646841618';
  PUBLIC_KEY= '5a237863b3cc2061003cbbc4fe20dc06';
  HASH= 'c0839fb7a2b6725023838988698f3b26';
 
  constructor(public http: HttpClient) {}

  public getAllCharacters(offset: string, limit: string) {
    let url =
    `https:gateway.marvel.com/v1/public/characters?ts=${this.TIME_STAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}` +
      '&offset=' +
      offset +
      '&limit=' +
      limit;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }
}