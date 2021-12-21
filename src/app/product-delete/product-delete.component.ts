import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from "./../product.service";
import { Product } from "./../product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  //property id store id in memory
  id: any = 0;
  product!: Product;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe(product => {
        this.product = product;
      });
      
    });
  }

  handleYes(){
    this._ProductService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['/products']);
    }, (e: any) => {
      console.log(e);
    });
    //redirect to products
    //this._Router.navigate(['/products']);
  }
  handleNo(){
    //redirect to products
    this._Router.navigate(['/products']);
  }

}
