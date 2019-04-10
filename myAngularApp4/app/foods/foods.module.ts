import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import {MD_FoodFormComponent} from './md-foodform.component';
import {FoodFormComponent} from './food-form.component';
import {FoodListComponent} from './foodList.component';
import {FoodItemComponent} from './foodItem.component';
import  {FoodRoutingModule} from './foods.routing.module'

@NgModule({
      imports: [BrowserModule, FormsModule,ReactiveFormsModule,FoodRoutingModule],
      declarations:[FoodItemComponent,FoodFormComponent,MD_FoodFormComponent,FoodListComponent]
    })  

  export class FoodModule{
      
  }