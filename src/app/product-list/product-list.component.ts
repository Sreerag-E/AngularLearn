import { Component } from '@angular/core';
import { Iproduct } from './product-list';

@Component({
  templateUrl:"./product-list.component.html",
  selector:'app-product-list',
  styleUrls:["./product-list.component.css"]
})
export class ProductListComponent {
  

  pageTtile : String ='Product list';
  imageWidth : number =50;
  imageMargin : number = 2; 
  showImage: boolean = false;

  filtered_products : Iproduct[];
  product: any;
 
  _filterText:string;
  get filterText():string{
    return this._filterText;
  }
  
  set filterText(value:string){
    this._filterText=value;
    this.filtered_products=(this.filterText ? (this.performFilter(this.filterText)):this.products);
  }

  products : Iproduct[] = [

    {
      "productId":2,
      "productName": "Garden cart",
      "productCode":"DCNH243",
      "price":32.333,
      "releaseDate":'Mar 28,2019',
      "imageUrl":"assets/img/cart.jpg",
      "Rating":3.2
    }, 
    {
      "productId":21,
      "productName": "Hammer",
      "productCode":"DCNH113",
      "price":12,
      "releaseDate":'Jul 8,2019',
      "imageUrl":"assets/img/hammer.jpg",
      "Rating":4.2
    }

  ]
constructor() {
  this.filtered_products=this.products;
  this.filterText='cart';
}
   
  performFilter(filterBy: string): Iproduct[] {
    filterBy=filterBy.toLocaleLowerCase();
       
    return this.products.filter((product : Iproduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  imageShow(): void{
    this.showImage=!this.showImage;
  }
}