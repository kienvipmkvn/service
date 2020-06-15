import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Output() addProduct = new EventEmitter<Product>()
  product: Product;
  name:string;
  price: number;
  color: string;
  imgPath: string;
  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(){
    if(name==null || this.price ==null || this.color==null) return;
    this.product= new Product(this.name, this.price, this.color, this.imgPath);
    this.addProduct.emit(this.product);
  }

}
