import { Route, ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";


export class CarListComponent implements OnInit{

    carList:Car[];
    constructor(private carService: CarService, private router:Router, private route: ActivatedRoute)
  {}

   ngOnInit(){
       this.getCars();
   }
  private getCars(){}

  onClick(car){
      this.router.navigate([car.id],{relative:this.route});
  }
}