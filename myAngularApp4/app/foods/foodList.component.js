"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var foods_service_1 = require("../foods/foods.service");
var router_1 = require("@angular/router");
var FoodListComponent = /** @class */ (function () {
    function FoodListComponent(foodService, router) {
        this.foodService = foodService;
        this.router = router;
    }
    FoodListComponent.prototype.ngOnInit = function () {
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
  */ this.getFoods();
    };
    FoodListComponent.prototype.likeChanged = function ($event) {
        console.log('Like changed on food Item');
    };
    FoodListComponent.prototype.getFoods = function () {
        var _this = this;
        //  this.fdList= this.foodService.getFoods();
        this.foodService.getFoods_promise()
            .then(function (foods) {
            _this.fdList = foods;
            console.log('food http worked');
        });
    };
    FoodListComponent.prototype.onItemClicked = function (food) {
        this.router.navigate(['/food', food.id]);
    };
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food-list',
            templateUrl: '../app/foods/foodList.component.html',
            styleUrls: ['app/foods/foodList.component.css'],
            providers: [foods_service_1.FoodService]
        }),
        __metadata("design:paramtypes", [foods_service_1.FoodService, router_1.Router])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=foodList.component.js.map