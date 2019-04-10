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
var carList_component_1 = require("../cars/carList.component");
var carItem_component_1 = require("../cars/carItem.component");
var carAppComponent_component_1 = require("../cars/carAppComponent.component");
var carCenterHome_component_1 = require("../cars/carCenterHome.component");
var carRoutes = [
    {
        path: 'car-center',
        component: carAppComponent_component_1.CarAppComponent,
        children: [
            {
                path: '',
                component: carList_component_1.CarListComponent,
                children: [
                    {
                        path: 'id',
                        component: carItem_component_1.CarItemComponent,
                    },
                    {
                        path: '',
                        component: carCenterHome_component_1.CarCenterHomeComponent,
                    }
                ]
            }
        ]
    }
];
var CarRoutingModule = /** @class */ (function () {
    function CarRoutingModule() {
    }
    CarRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(carRoutes)],
            exports: [router_1.RouterModule]
        })
    ], CarRoutingModule);
    return CarRoutingModule;
}());
exports.CarRoutingModule = CarRoutingModule;
//# sourceMappingURL=cars.routing.module.js.map