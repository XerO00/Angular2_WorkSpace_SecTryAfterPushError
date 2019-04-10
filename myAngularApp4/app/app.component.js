"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //myDateObject = new Date(2000,8,10,12,12,12,12);//sep 10 2000
        this.foodItems = {
            'apple': {
                'name': 'Apple',
                'description': 'I am red.',
                'facts': {
                    'servingSize': '1 small apple',
                    'protain': '22G',
                    'carbs': '23',
                    'fat': '34'
                }
            },
            'banana': {
                'name': 'Banana',
                'description': 'I am Yellow and white.',
                'facts': {
                    'servingSize': '1 small banana',
                    'protain': '2-3G',
                    'carbs': '23',
                    'fat': '34'
                }
            }
        };
        this.foodSourceArray = [
            {
                'name': 'Apple',
                'description': 'I am red.',
                'facts': {
                    'servingSize': '1 small apple',
                    'protain': '22G'
                }
            },
            {
                'name': 'Banana',
                'description': 'I am Yellow and white.',
                'facts': {
                    'servingSize': '1 small banana',
                    'protain': '2-3G'
                }
            }
        ];
    }
    AppComponent.prototype.reloadFoods = function () {
        var newFoodSourceArray = [
            {
                'name': 'RedApple',
                'description': 'I am red.',
                'facts': {
                    'servingSize': '1 small apple',
                    'protain': '22G'
                }
            },
            {
                'name': 'Banana',
                'description': 'I am Yellow and white.',
                'facts': {
                    'servingSize': '1 small banana',
                    'protain': '2-3G'
                }
            }
        ];
        this.foodSourceArray = newFoodSourceArray;
    };
    AppComponent.prototype.likeChanged = function ($event) {
        console.log('event now changed' + ' ' + $event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map