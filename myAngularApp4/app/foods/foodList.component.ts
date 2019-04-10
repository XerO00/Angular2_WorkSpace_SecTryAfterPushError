import {Component,Input,EventEmitter,Output} from '@angular/core';
import { FoodItem} from '../models/foodItem';
import {FoodItemComponent} from '../components/foodItem.component'
import { Provider, OnInit } from 'angular2/core';
import {FoodService} from '../foods/foods.service'
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({

   selector:'food-list',
   templateUrl:'../app/foods/foodList.component.html',
   styleUrls:['app/foods/foodList.component.css'],  
   providers:[FoodService]
})

export class FoodListComponent implements OnInit{

    //@Input()  fdList:FoodItem[];

    fdList:FoodItem[];

    constructor(private foodService: FoodService ,private router:Router){

    }

    ngOnInit(){
        /*
        if(this.fdList==null){

            var foodList:FoodItem[];

            foodList= [];

            var apple= new FoodItem(1,"apple","","","","",0,0,0,0);

            var banana= new FoodItem(2,"banana","","","","",1,0,0,0);
        
            var eggs= new FoodItem(2,"eggs","","","","",2,0,0,0);
         
            foodList.push(apple);
            foodList.push(banana);
            foodList.push(eggs);
      
            this.fdList= foodList;
            console.log('Dummy food item set up');
        }
  */  this.getFoods();
    }

    likeChanged($event){
        console.log('Like changed on food Item');
    }

    getFoods(){
      //  this.fdList= this.foodService.getFoods();
      this.foodService.getFoods_promise()
      .then(foods => {
          this.fdList = foods
         console.log('food http worked');
      });
    }
   
    onItemClicked(food:FoodItem){
        this.router.navigate(['/food',food.id]);
    }
}