import {Component} from '@angular/core';
import { Date } from 'core-js';

  @Component({
 
    selector:'my-app',
    templateUrl:'./app/app.component.html'
      
})

  export class AppComponent{
  
    //myDateObject = new Date(2000,8,10,12,12,12,12);//sep 10 2000

    foodItems={
    'apple':{
          'name':'Apple',
          'description':'I am red.',
          'facts':{
                 'servingSize':'1 small apple',
                 'protain':'22G',
                 'carbs':'23',
                 'fat':'34'
                }
            },
     'banana':{
      
        'name':'Banana',
          'description':'I am Yellow and white.',
          'facts':{
                 'servingSize':'1 small banana',
                 'protain':'2-3G',
                 'carbs':'23',
                 'fat':'34'
                 
                }
          
      
     }       
  
  }

  foodSourceArray = [
    {
      'name':'Apple',
        'description':'I am red.',
        'facts':{
               'servingSize':'1 small apple',
               'protain':'22G'
               
              }
        
    },
    {
      'name':'Banana',
        'description':'I am Yellow and white.',
        'facts':{
               'servingSize':'1 small banana',
               'protain':'2-3G'
               
              }
        
    }
  ]

  reloadFoods(){
   var newFoodSourceArray=
   [
    {
      'name':'RedApple',
        'description':'I am red.',
        'facts':{
               'servingSize':'1 small apple',
               'protain':'22G'
               
              }
        
    },
    {
      'name':'Banana',
        'description':'I am Yellow and white.',
        'facts':{
               'servingSize':'1 small banana',
               'protain':'2-3G'
               
              }
        
    }
   ] 
   this.foodSourceArray= newFoodSourceArray;
  }
 likeChanged($event)
  {
   console.log('event now changed' + ' '+$event);
  }
}