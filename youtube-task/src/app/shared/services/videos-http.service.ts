import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SearchItem } from 'src/app/core/model/search-item.model';
import { SearchResponse } from 'src/app/core/model/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class VideosHttpService {
  constructor(private http: HttpClient) {}

  public getItems(): Observable<SearchItem[]> {
    return this.http.get<SearchResponse>('../../assets/response.json').pipe(map((res) => res.items));
  }
}
