import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { SearchResponse } from '../core/model/search-response.model';
import { SearchItem } from '../core/model/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class ResponseJsonService {
  private sbj$$ = new BehaviorSubject<string>('');
  public sbj$ = this.sbj$$.asObservable();

  constructor(private http: HttpClient) {}

  public getItems(): Observable<SearchItem[]> {
    return this.http.get<SearchResponse>('../../assets/response.json').pipe(map((res) => res.items));
  }
  public changeValue(value: string): void {
    this.sbj$$.next(value);
  }
}
