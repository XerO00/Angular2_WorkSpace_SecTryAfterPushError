import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import {CarListComponent} from '../cars/carList.component';
import {CarItemComponent} from '../cars/carItem.component';
import {CarRoutingModule} from '../cars/cars.routing.module';
import {CarAppComponent} from '../cars/carAppComponent.component';
import {CarCenterHomeComponent} from '../cars/carCenterHome .component'

@NgModule({
     imports:[BrowserModule, FormsModule,ReactiveFormsModule,CarsRoutinModule],
     declarations:[CarListComponent,CarItemComponent,CarAppComponent,CarCenterHomeComponent]

})


export class CarModule{


}

