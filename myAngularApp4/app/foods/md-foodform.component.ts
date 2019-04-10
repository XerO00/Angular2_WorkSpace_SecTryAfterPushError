import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validator, Validators} from '@angular/forms'
//
//import {FoodItem} from '../models/foodItem';

@Component ({
   moduleId: module.id,
   selector:'md-food-form',
   templateUrl:'md-food-form.component.html'
})

export class MD_FoodFormComponent implements OnInit{

    public fdForm: FormGroup;
    public isSubmitted:boolean;

    constructor( private _fb:FormBuilder){

    }
    //uses of form builder
    ngOnInit(){
        this.fdForm = this._fb.group({
            name:['',[<any>Validators.required]],
            desctripition:['',[<any>Validators.required]],
            nutritionalInfo:this._fb.group({
                servingSize:'',
                unit:'g',
                calories:'',
                fat:'',
                protein:'',
                carbs:''

            })
        });
        this.listenChanges();
    }

    demoDelayedFormSet(){

        var update= 
        {
            name:"Banana",
            desctripition:"Yellow and Soft" ,
            nutritionalInfo:
            {
                servingSize:'1 small',
                unit:'g',
                calories:'100',
                fat:'3',
                protein:'0',
                carbs:'20'

            }
        }
        this.fdForm.setValue(update);
    }

    demoDelayedNameFieldSet(){
       
        var control = this.fdForm.controls['name'];
        control.setValue("Grape",{onlySelf:true})
    }

    listenChanges(){
      const formChanges = this.fdForm.valueChanges;
    
      formChanges.subscribe(changeObject => console.log(changeObject) );
    }
    save(model:Object,isValid:boolean){
        this.isSubmitted=true;
    }
}
  