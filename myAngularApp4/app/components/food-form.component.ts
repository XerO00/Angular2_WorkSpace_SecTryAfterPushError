import {Component} from '@angular/core';

import {FoodItem} from '../models/foodItem';

@Component ({
   moduleId: module.id,
   selector:'food-form',
   templateUrl:'food-form.component.html'
})

export class FoodFormComponent {
    
  groups = ["Fruit","Vegetables","Meat","Dairy","Grains"];

  model = new FoodItem("apple","","","","",0,0,0,0);

  submitted=false;

   onSubmit()
    {
        this.submitted=true;
        console.log("submitting");
    }

    get diagnostic()
    {
        return JSON.stringify(this.model);
    }

    newFood()
    {
        this.model= new FoodItem ("newFood","","","","",0,0,0,0);
    }
}