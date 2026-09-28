import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { RawgResponse } from '../models/rawg-response.model';

@Injectable({
  providedIn: 'root',
})
export class RawgService {

  private readonly apiUrl = environment.rawgApiUrl;

  constructor(private http: HttpClient) { }

  getGames(): Observable<RawgResponse> {

    const params = new HttpParams()
      .set('key', environment.rawgApiKey)
      .set('page_size', '10');
    return this.http.get<RawgResponse>(this.apiUrl, { params });
  }
}
