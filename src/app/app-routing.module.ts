import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
// import { LaptopComponent } from './product/laptop/laptop.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
// import { TvComponent } from './product/tv/tv.component';
// import { ProductsComponent } from './product/products/products.component';

//single router outlet
// const routes: Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'},
//   { path: 'login', component: LoginComponent}, // localhost:4200/login
//   {path: 'home', component: HomeComponent},
//   {path: 'aboutus', component: AboutusComponent},
//   {path: 'contactus', component: ContactusComponent},
//   {path: 'product', children: [
//     { path: '', component: ProductComponent}, // localhost:4200/product/laptop
//     {path: 'laptop', component: LaptopComponent},
//     { path: 'tv', component: TvComponent},
//     {path: 'tablet', component: TabletComponent},import { ProductComponent } from './product/product.component';

//     {path: 'washingMachine', component:WashingMachineComponent }
//   ] },
//   {path: '**', component: PagenotfoundComponent}
// ];

//multiple router outlet
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  { path: 'products', loadChildren: () => import('./product/products/products.module').then(m => m.ProductsModule) },
  {path: 'post', component:PostComponent},
  {path: 'postdetails/:id', component:PostdetailsComponent},
  {path: 'users', component:UsersComponent},
  {path: 'userdetails/:id', component:UserdetailsComponent},
  {path: 'manageproduct', component:ManageProductsComponent},

  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
   imports: [RouterModule.forRoot(routes ,{ preloadingStrategy: PreloadAllModules})],//for lazy loading 
  exports: [RouterModule]
})
export class AppRoutingModule { }
