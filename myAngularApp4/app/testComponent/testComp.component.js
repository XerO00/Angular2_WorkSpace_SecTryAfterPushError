"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.buttonState = "inactive";
        this.textState = "normal";
    }
    TestComponent.prototype.toggleButtonState = function () {
        if (this.buttonState == "inactive") {
            this.buttonState = "active";
        }
        else {
            this.buttonState = "inactive";
        }
    };
    TestComponent.prototype.toggleTextState = function () {
        if (this.textState == "normal") {
            this.textState = "larger";
        }
        else {
            this.textState = "normal";
        }
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-component',
            templateUrl: './app/testComponent/testComp.component.html',
            styles: [],
            animations: [
                core_1.trigger('buttonState', [
                    core_1.state('inactive', core_1.style({
                        backgroundColor: "green",
                        transform: 'scale(1)'
                    }))
                ]),
                core_1.trigger('textState', [
                    core_1.state('active', core_1.style({
                        backgroundColor: "blue",
                        color: 'white',
                        transform: 'scale(2)'
                    })),
                    core_1.transition("inactive => active", core_1.animate('500ms ease-in')),
                    core_1.transition("active => inactive", core_1.animate('500ms ease-out')),
                ]),
                core_1.trigger('textState', [
                    core_1.state('normal', core_1.style({
                        fontSize: '1em',
                    })),
                    core_1.state('larger', core_1.style({
                        fontSize: '1.5em',
                    })),
                    core_1.transition("normal => *", core_1.animate('100ms ease-in')),
                ]),
                core_1.trigger('slideIn', [
                    core_1.state('in', core_1.style({
                        transform: 'translateY(0)'
                    })),
                    core_1.transition('void => *', [
                        core_1.style({
                            transform: 'translateY(-200%)'
                        }), core_1.animate(500),
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(500, core_1.style({ transform: 'translateY(200%)' }))
                    ]),
                ])
            ]
        })
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=testComp.component.js.map