import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../model/item';

const headerOption = {
  headers: new HttpHeaders({ 'Accept': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  baseUrl = 'https://datos.gob.es/apidata/catalog/distribution';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item> {
    return this.http.get<Item>(this.baseUrl, headerOption)
  }
}
