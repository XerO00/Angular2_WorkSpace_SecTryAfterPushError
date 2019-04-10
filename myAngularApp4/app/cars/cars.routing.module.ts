import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';

import {CarListComponent} from '../cars/carList.component';
import {CarItemComponent} from '../cars/carItem.component';
import {CarAppComponent} from '../cars/carAppComponent.component';
import {CarCenterHomeComponent} from '../cars/carCenterHome.component'

const carRoutes:Routes =[
    {
        path:'car-center',
        component:CarAppComponent,
        children:[
            {
                path:'',
                component:CarListComponent,
                children:[
                    {
                        path:'id',
                        component:CarItemComponent,
                       
                    },
                    {
                        path:'',
                        component:CarCenterHomeComponent,
                       }
                ]
            }

        ]
    }
]
@NgModule({
     imports:[RouterModule.forChild(carRoutes) ],
     exports:[RouterModule]
})


export class CarRoutingModule{


}

