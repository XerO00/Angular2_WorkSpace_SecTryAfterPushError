"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var foodList_component_1 = require("./foodList.component");
var foodItem_component_1 = require("./foodItem.component");
var foodRoutes = [
    {
        path: 'food/:id',
        component: foodItem_component_1.FoodItemComponent
    },
    {
        path: 'foods',
        component: foodList_component_1.FoodListComponent
    },
];
var FoodRoutingModule = /** @class */ (function () {
    function FoodRoutingModule() {
    }
    FoodRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(foodRoutes)],
            exports: [router_1.RouterModule]
        })
    ], FoodRoutingModule);
    return FoodRoutingModule;
}());
exports.FoodRoutingModule = FoodRoutingModule;
//# sourceMappingURL=foods.routing.module.js.map