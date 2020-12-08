import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products = [];

  constructor(
    public svProduct: ProductService,
    private router: Router,
  ) {
    this.getProducts();
   }
   getProducts() {
    this.svProduct.getProducts().subscribe(res => {
      this.products = res;
      console.log("🚀 ~ this.svProduct.getProducts ~ res", res);
    });
  }

  ngOnInit(): void {
  }

}
