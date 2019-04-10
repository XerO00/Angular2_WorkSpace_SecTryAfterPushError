"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
//import {FoodItemComponent} from './components/foodItem.component';
var matrixGreenText_directive_1 = require("./attribute-directives/matrixGreenText.directive");
var stripVowelPipe_1 = require("./pipes/stripVowelPipe");
//import {FoodFormComponent} from './components/food-form.component';
//import {MD_FoodFormComponent} from './components/md-foodform.component';
var app_routing_module_1 = require("./app.routing.module");
var home_component_1 = require("./components/home.component");
var foods_module_1 = require("./foods/foods.module");
var testComp_component_1 = require("./testComponent/testComp.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routing_module_1.AppRoutingModule, foods_module_1.FoodModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, matrixGreenText_directive_1.MatrixGreenText, testComp_component_1.TestComponent, stripVowelPipe_1.StripVowelPipe, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map