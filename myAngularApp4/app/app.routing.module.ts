import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {FoodItemComponent} from './components/foodItem.component';
import {HomeComponent} from './components/home.component';
//import {FoodListComponent} from './components/foodList.component';
import {FoodRoutingModule} from './foods/foods.routing.module',
import {FoodModule} from './foods/foods.module'

const myAppRoutes:Routes= [

  
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'**',
    component : HomeComponent
  },  
  ];

@NgModule({
    imports: [RouterModule.forRoot(myAppRoutes),FoodModule,FoodRoutingModule],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}
