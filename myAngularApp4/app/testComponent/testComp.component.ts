import {transition,animate,trigger,Component,state,style} from '@angular/core';

import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
 selector:'test-component',
 templateUrl:'./app/testComponent/testComp.component.html',
 styles:[

 ],
 animations:[
     trigger('buttonState',[
         state('inactive',style({
             backgroundColor: "green",
             transform:'scale(1)'
         }))
     ]),
     trigger('textState',[
        state('active',style({
            backgroundColor: "blue",
            color:'white',
            transform:'scale(2)'
        })),
        transition("inactive => active", animate('500ms ease-in')),
        transition("active => inactive", animate('500ms ease-out')),
     ]),
   trigger('textState', [
       state('normal', style({
           fontSize:'1em',
      })),
      state('larger', style({
        fontSize:'1.5em',
   })),

   transition("normal => *", animate('100ms ease-in')),
 //  transition("normal => larger, larger => normal", animate('100ms ease-in')),
   ]),

   trigger('slideIn',[
       state('in',style({
           transform:'translateY(0)'
       })),
       transition('void => *',[
           style({
               transform:'translateY(-200%)'  }),animate(500),  ]),
           transition('* => void',[
               animate(500,style({transform: 'translateY(200%)'  }))
         
       ]),
   ])
    ]

})

export class TestComponent
{
 buttonState="inactive";
 textState="normal";
 
 toggleButtonState(){
     if(this.buttonState== "inactive"){
         this.buttonState="active";
     }
     else{
         this.buttonState="inactive";
     }
 }

 toggleTextState(){
    if(this.textState== "normal"){
        this.textState="larger";
    }
    else{
        this.textState="normal";
    }
 }
}