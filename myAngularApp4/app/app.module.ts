import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
//import {FoodItemComponent} from './components/foodItem.component';
import {MatrixGreenText} from './attribute-directives/matrixGreenText.directive';
import {StripVowelPipe} from './pipes/stripVowelPipe'; 
//import {FoodFormComponent} from './components/food-form.component';
//import {MD_FoodFormComponent} from './components/md-foodform.component';
import {AppRoutingModule} from './app.routing.module';

import {HomeComponent} from './components/home.component';
import {FoodModule} from './foods/foods.module'
//import {FoodRoutingModule} from './foods/foods.routing.module'
//import {FoodListComponent} from './components/foodList.component';

import {CarModule}  from './cars/cars.module';
import {TestComponent} from './testComponent/testComp.component';

import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
      imports: [BrowserModule, FormsModule,ReactiveFormsModule,AppRoutingModule,FoodModule, HttpModule],
      declarations:[AppComponent,MatrixGreenText,TestComponent,StripVowelPipe,HomeComponent],
      bootstrap:[AppComponent]

  })

  export class AppModule{
      
  }