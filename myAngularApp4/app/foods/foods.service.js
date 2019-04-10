"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var foodItem_1 = require("../models/foodItem");
require("rxjs/add/operator/toPromise");
var FoodService = /** @class */ (function () {
    function FoodService() {
        this.dummyFoodList = [
            new foodItem_1.FoodItem(1, "apple", "", "", "", "", 0, 0, 0, 0),
            new foodItem_1.FoodItem(2, "banana", "", "", "", "", 1, 0, 0, 0),
            new foodItem_1.FoodItem(3, "eggs", "", "", "", "", 2, 0, 0, 0)
        ];
    }
    FoodService.prototype.getFoods = function () {
        return this.dummyFoodList;
    };
    FoodService.prototype.getFoodItem = function (id) {
        var matchedFood = new foodItem_1.FoodItem(0, "");
        var foodFound = false;
        this.dummyFoodList.forEach(function (food) {
            if (foodFound) {
                if (!food.id == id) {
                    console.log("food found");
                    matchedFood = food;
                    foodFound = true;
                }
            }
        });
        return matchedFood;
    };
    FoodService.prototype.getFoods_promise = function () {
        var foodUrl;
        return this.http.get(foodUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FoodService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
        console.log('error got into http get');
    };
    FoodService = __decorate([
        core_1.Injectable()
    ], FoodService);
    return FoodService;
}());
exports.FoodService = FoodService;
//# sourceMappingURL=foods.service.js.map