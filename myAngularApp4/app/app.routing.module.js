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
//import {FoodItemComponent} from './components/foodItem.component';
var home_component_1 = require("./components/home.component");
//import {FoodListComponent} from './components/foodList.component';
var foods_routing_module_1 = require("./foods/foods.routing.module");
var foods_module_1 = require("./foods/foods.module");
var myAppRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: home_component_1.HomeComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(myAppRoutes), foods_module_1.FoodModule, foods_routing_module_1.FoodRoutingModule],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map