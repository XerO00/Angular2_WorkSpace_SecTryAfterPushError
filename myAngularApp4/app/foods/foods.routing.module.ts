import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import {MD_FoodFormComponent} from './md-foodform.component';
import {FoodListComponent} from './foodList.component';
import {FoodItemComponent} from './foodItem.component';

const foodRoutes: Routes= [

  {
    path:'food/:id',
    component : FoodItemComponent
  },
  
  {
  path:'foods',
  component : FoodListComponent
},

];

@NgModule({
      imports: [RouterModule.forChild(foodRoutes)],
      exports:[RouterModule]
    })

  export class FoodRoutingModule{
      
  }