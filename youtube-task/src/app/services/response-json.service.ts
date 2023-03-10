import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseApiTypes } from '../core/model/search-response.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponseJsonService {
  constructor(private http: HttpClient) {}
  getItems() {
    return this.http.get<ResponseApiTypes>('../../assets/response.json').pipe(
      map((res) => res.items),
      tap((item) => console.log(item)),
    );
  }
}
