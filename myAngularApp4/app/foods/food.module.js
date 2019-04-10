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
var md_foodform_component_1 = require("./md-foodform.component");
var food_form_component_1 = require("./food-form.component");
var foodList_component_1 = require("./foodList.component");
var foodItem_component_1 = require("./foodItem.component");
var foods_routing_module_1 = require("./foods.routing.module");
var FoodModule = /** @class */ (function () {
    function FoodModule() {
    }
    FoodModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, foods_routing_module_1.FoodRoutingModule],
            declarations: [foodItem_component_1.FoodItemComponent, food_form_component_1.FoodFormComponent, md_foodform_component_1.MD_FoodFormComponent, foodList_component_1.FoodListComponent]
        })
    ], FoodModule);
    return FoodModule;
}());
exports.FoodModule = FoodModule;
//# sourceMappingURL=food.module.js.map