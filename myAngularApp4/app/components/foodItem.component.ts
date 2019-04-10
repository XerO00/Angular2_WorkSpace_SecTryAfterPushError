import {Component,Input,EventEmitter,Output} from '@angular/core';
import {FoodItem} from '../models/foodItem';
  @Component({
 
    selector:'food-item',
    templateUrl:'./app/components/foodItem.component.html',
    styleUrls:['app/components/foodItem.component.css']
      
})

  export class FoodItemComponent{
   // interpolation example; they would not work with new keyword 
    //  name="Prasanna";
     @Input()foodItems;
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
    } 
