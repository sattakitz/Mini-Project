import { Component, OnInit ,inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { from } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  id;
  editForm: FormGroup;
  products = [];

  constructor(private formBuilder: FormBuilder,private router: Router, 
    private svProducts: ProductService , private rt: ActivatedRoute) { 

      this.id=rt.snapshot.params['id'];
      svProducts.getProductById(this.id).subscribe((data:any)=>{
        this.editForm.patchValue({id:data.id,ads:data.createdAt,price:data.price,product:data.product})
      });
      
    } 

    putProduct(){
      console.log(this.editForm);      
      this.svProducts.putProduct(this.id,this.editForm.value).subscribe(data=>{        
        console.log('edit success');        
      })
    }

    ngOnInit(): void {      

      this.editForm = this.formBuilder.group({
        id: [],
        ads: ['', Validators.required],
        price: ['', Validators.required],
        product: ['', Validators.required]
      });
  }

  
}

