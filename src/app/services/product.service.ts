import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApi = 'https://5fca6cf13c1c220016442675.mockapi.io/api/v1/';
  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<any>(`${this.baseApi}products`);
  }
  getProductById(id) {
    return this.http.get(`${this.baseApi}products/${id}`);
  }
  postProduct(model) {
    return this.http.post(`${this.baseApi}products`, model);
  }
  putProduct(id, model) {
    return this.http.put(`${this.baseApi}products/${id}`, model);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.baseApi}products/${id}`);
  }
}
