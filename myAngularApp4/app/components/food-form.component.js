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
var FoodFormComponent = /** @class */ (function () {
    function FoodFormComponent() {
        this.groups = ["Fruit", "Vegetables", "Meat", "Dairy", "Grains"];
        this.model = new foodItem_1.FoodItem("apple", "", "", "", "", 0, 0, 0, 0);
        this.submitted = false;
    }
    FoodFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log("submitting");
    };
    Object.defineProperty(FoodFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    FoodFormComponent.prototype.newFood = function () {
        this.model = new foodItem_1.FoodItem("newFood", "", "", "", "", 0, 0, 0, 0);
    };
    FoodFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'food-form',
            templateUrl: 'food-form.component.html'
        })
    ], FoodFormComponent);
    return FoodFormComponent;
}());
exports.FoodFormComponent = FoodFormComponent;
//# sourceMappingURL=food-form.component.js.map