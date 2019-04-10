import {Component,Input,EventEmitter,Output} from '@angular/core';
import {Params,ActivatedRoute,Router} from '@angular/router';

import { FoodItem} from '../models/foodItem';
import { Provider, OnInit } from 'angular2/core';
import {FoodService} from '../foods/foods.service'
import { Route } from '@angular/compiler/src/core';


  @Component({
 
    selector:'food-item',
    templateUrl:'./app/foods/foodItem.component.html',
    styleUrls:['app/foods/foodItem.component.css'],
    providers: [FoodService]  
})

  export class FoodItemComponent implements OnInit{
   // interpolation example; they would not work with new keyword 
    //  name="Prasanna";
    // @Input()foodItem;
      foodItem:FoodItem; 
    @Output()likeChanged = new EventEmitter();

     likedFeatured ="liked featured";
     isLike = false;

     descriptionItalic= true;
     descriptionCaps= true;
     descriptionBordered= true;
     descriptionLargeFont= true;
    // below for ngSwitch
    nutritionalFacts="";
    // below used for ngIf demo
    showdescription=true;

    // below example of routin service
  constructor(private foodService : FoodService , private router: Router , 
    private route: ActivatedRoute){}

   //custom logic using event bindings 
      onLikeButtonPressed($event)
      {
       var title = $event.target.textContent;
        if(title=="Like")
          {
            $event.target.textContent="Unlike";
            this.isLike= true;
          }
          else
          {
            $event.target.textContent="Like";
            this.isLike= false;
          }
          this.likeChanged.emit(this.isLike);
      }
  
  setFoodDescriptionStyleClasses(){
    let classes= 
      {
     italic:this.descriptionItalic,
     caps:this.descriptionCaps

       } return classes;
  }

  setFoodDescriptionControlObject(){
     let styles=   
      {
       'border':this.descriptionBordered ? "3px solid black " : 'none',
       'font-size':this.descriptionLargeFont ? "large" :"medium" ,
       'font-style':this.descriptionItalic ? "italic" : "default"    
      }
    return styles;
  }
   
  ngOnInit(){
      let id= +this.route.snapshot.params['id'];
     // this.foodItem= this.foodService.getFoods[id];
     //this.foodItem= this.foodService.getFoodItem['id'];
    this.foodItem= this.foodService.getFoodItem(id);
    }
    } 
