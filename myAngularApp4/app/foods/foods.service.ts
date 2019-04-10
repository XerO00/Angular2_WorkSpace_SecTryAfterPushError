import {Injectable} from '@angular/core';
import {FoodItem} from '../models/foodItem'
import {Headers,  Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class FoodService{ 
        
    dummyFoodList: FoodItem[]=[
        
       new FoodItem(1,"apple","","","","",0,0,0,0),
       new FoodItem(2,"banana","","","","",1,0,0,0),
       new FoodItem(3,"eggs","","","","",2,0,0,0)
     
    ]
  getFoods():FoodItem[]{
     return this.dummyFoodList;
  } 

  getFoodItem(id):FoodItem{

     var matchedFood = new FoodItem(0,""); 
     var foodFound= false;

     this.dummyFoodList.forEach(food => { 
        if(foodFound){ 
        if(!food.id == id)
      {
           console.log("food found");
           matchedFood = food;
           foodFound=true;
      }   
    
    }
    
    })
    return matchedFood;
  }

  getFoods_promise():Promise<FoodItem[]>{
     const foodUrl: 'http://localhost:3000/api/foods';

     return this.http.get(foodUrl)
     .toPromise()
     .then( response => response.json() as FoodItem[])
     .catch(this.handleError)
  }
  private handleError(error : any ): Promise<any>{
     return Promise.reject(error.message || error);
    console.log('error got into http get');
  
  }
}
