import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-project';

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
}
