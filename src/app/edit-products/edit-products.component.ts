import { Component, OnInit ,inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { from } from 'rxjs';
import {Router} from '@angular/router'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, 
    private svProducts: ProductService) { }
    
    ngOnInit(): void {
    //   let productId = window.localStorage.getItem("editId");
    // if(!productId) {
    //   alert("Invalid action.")
    //   this.router.navigate(['list-products']);
    //   return;
    // }
    // this.editForm = this.formBuilder.group({
    //   id: [''],
    //   createdAt: ['', Validators.required],
    //   price: ['', Validators.required],
    //   product: ['', Validators.required],
    // });

  }

  
  onSubmit() {    

  }


}

