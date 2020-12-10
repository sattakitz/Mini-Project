import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import {  Routes } from '@angular/router';
import { ListProductsComponent } from '../list-products/list-products.component';
import { inspect } from 'util';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addForm :FormGroup;
  products = [];
  router: Routes;  

  constructor(private fb:FormBuilder,public svProduct: ProductService) { 
      
    }
    postProduct(){
      console.log(this.addForm.value);
      this.svProduct.postProduct(this.addForm.value).subscribe(data=>{
        console.log('Add success~!');
        
      });      
    }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: [],
      ads: ['', Validators.required],
      price: ['', Validators.required],
      product: ['', Validators.required]
    });
  }

 
}
