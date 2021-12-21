import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from "./product";
import {environment} from './../environments/environment';
import { Observable } from 'rxjs';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //khai bao data cho product
  products:Product[] = [
    {
      name: 'Iphone',
      price: 20000
    },
    {
      name: 'Samsung',
      price: 20000
    },
    {
      name: 'Oppo',
      price: 20000
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  //lay tat ca
  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  //lay 1 item theo id
  find( id:any ):Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  //store
  store( product:Product ): Observable<Product>{
    return this.http.post<Product>(API_URL + '/products', product);
  }

  //update
  update( id:number, product:Product ): Observable<Product>{
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  //destroy
  destroy(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }

  //search
  search( q:any ):Product[] {
    let results:Product[] = [];
    for( let product of this.products ){
      if(product.name == q){
        results.push(product);
      }
    }
    return results;
  }
}
