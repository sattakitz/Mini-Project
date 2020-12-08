import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'add-products', component: AddProductsComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'edit-products', component: EditProductsComponent },
  { path: '', component : ListProductsComponent}
];

export const routing = RouterModule.forRoot(routes);