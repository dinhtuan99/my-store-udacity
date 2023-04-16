import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get('assets/data.json') as Observable<Product[]>;
  }

  getProductsById(id: number) {
    return this.httpClient
      .get('assets/data.json')
      .pipe(
        map(
          (products) =>
            (products as Product[]).filter((product) => product.id === id)[0]
        )
      );
  }

}
