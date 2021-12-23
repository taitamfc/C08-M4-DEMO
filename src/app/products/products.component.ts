import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../product.service";
import { Product } from "./../product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [];
  keyword:string = '';
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this._ProductService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  search(value:any){
    if(value){
      this._ProductService.search(value).subscribe(products => {
        this.products = products;
      });
    }else{
      this._ProductService.getAll().subscribe(products => {
        this.products = products;
      });
    }
    
  }

}
