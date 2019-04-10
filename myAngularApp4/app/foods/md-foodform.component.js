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
var forms_1 = require("@angular/forms");
//
//import {FoodItem} from '../models/foodItem';
var MD_FoodFormComponent = /** @class */ (function () {
    function MD_FoodFormComponent(_fb) {
        this._fb = _fb;
    }
    //uses of form builder
    MD_FoodFormComponent.prototype.ngOnInit = function () {
        this.fdForm = this._fb.group({
            name: ['', [forms_1.Validators.required]],
            desctripition: ['', [forms_1.Validators.required]],
            nutritionalInfo: this._fb.group({
                servingSize: '',
                unit: 'g',
                calories: '',
                fat: '',
                protein: '',
                carbs: ''
            })
        });
        this.listenChanges();
    };
    MD_FoodFormComponent.prototype.demoDelayedFormSet = function () {
        var update = {
            name: "Banana",
            desctripition: "Yellow and Soft",
            nutritionalInfo: {
                servingSize: '1 small',
                unit: 'g',
                calories: '100',
                fat: '3',
                protein: '0',
                carbs: '20'
            }
        };
        this.fdForm.setValue(update);
    };
    MD_FoodFormComponent.prototype.demoDelayedNameFieldSet = function () {
        var control = this.fdForm.controls['name'];
        control.setValue("Grape", { onlySelf: true });
    };
    MD_FoodFormComponent.prototype.listenChanges = function () {
        var formChanges = this.fdForm.valueChanges;
        formChanges.subscribe(function (changeObject) { return console.log(changeObject); });
    };
    MD_FoodFormComponent.prototype.save = function (model, isValid) {
        this.isSubmitted = true;
    };
    MD_FoodFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-food-form',
            templateUrl: 'md-food-form.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], MD_FoodFormComponent);
    return MD_FoodFormComponent;
}());
exports.MD_FoodFormComponent = MD_FoodFormComponent;
//# sourceMappingURL=md-foodform.component.js.map