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
  idDelete:any = null;
  nameDelete:any = null;
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._ProductService.getAll();
  }

  search(value:any){
    if(value){
      this.products = this._ProductService.search(value);
    }else{
      this.products = this._ProductService.getAll();
    }
    
  }

  handleDeleteItem(id:any){
    let product = this._ProductService.find(id);
    this.idDelete = id;
    this.nameDelete = product.name;
  }

  doDelete(id:any){
    this._ProductService.destroy(id);
  }

}
