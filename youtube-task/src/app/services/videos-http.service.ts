import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SearchResponse } from '../core/model/search-response.model';
import { SearchItem } from '../core/model/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class VideosHttpService {
  constructor(private http: HttpClient) {}

  public getItems(): Observable<SearchItem[]> {
    return this.http.get<SearchResponse>('../../assets/response.json').pipe(map((res) => res.items));
  }
}
