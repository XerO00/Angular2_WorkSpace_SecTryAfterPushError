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
var router_1 = require("@angular/router");
var foods_service_1 = require("../foods/foods.service");
var FoodItemComponent = /** @class */ (function () {
    // below example of routin service
    function FoodItemComponent(foodService, router, route) {
        this.foodService = foodService;
        this.router = router;
        this.route = route;
        this.likeChanged = new core_1.EventEmitter();
        this.likedFeatured = "liked featured";
        this.isLike = false;
        this.descriptionItalic = true;
        this.descriptionCaps = true;
        this.descriptionBordered = true;
        this.descriptionLargeFont = true;
        // below for ngSwitch
        this.nutritionalFacts = "";
        // below used for ngIf demo
        this.showdescription = true;
    }
    //custom logic using event bindings 
    FoodItemComponent.prototype.onLikeButtonPressed = function ($event) {
        var title = $event.target.textContent;
        if (title == "Like") {
            $event.target.textContent = "Unlike";
            this.isLike = true;
        }
        else {
            $event.target.textContent = "Like";
            this.isLike = false;
        }
        this.likeChanged.emit(this.isLike);
    };
    FoodItemComponent.prototype.setFoodDescriptionStyleClasses = function () {
        var classes = {
            italic: this.descriptionItalic,
            caps: this.descriptionCaps
        };
        return classes;
    };
    FoodItemComponent.prototype.setFoodDescriptionControlObject = function () {
        var styles = {
            'border': this.descriptionBordered ? "3px solid black " : 'none',
            'font-size': this.descriptionLargeFont ? "large" : "medium",
            'font-style': this.descriptionItalic ? "italic" : "default"
        };
        return styles;
    };
    FoodItemComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        // this.foodItem= this.foodService.getFoods[id];
        //this.foodItem= this.foodService.getFoodItem['id'];
        this.foodItem = this.foodService.getFoodItem(id);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FoodItemComponent.prototype, "likeChanged", void 0);
    FoodItemComponent = __decorate([
        core_1.Component({
            selector: 'food-item',
            templateUrl: './app/foods/foodItem.component.html',
            styleUrls: ['app/foods/foodItem.component.css'],
            providers: [foods_service_1.FoodService]
        }),
        __metadata("design:paramtypes", [foods_service_1.FoodService, router_1.Router,
            router_1.ActivatedRoute])
    ], FoodItemComponent);
    return FoodItemComponent;
}());
exports.FoodItemComponent = FoodItemComponent;
//# sourceMappingURL=foodItem.component.js.map