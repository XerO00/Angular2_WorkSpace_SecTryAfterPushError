"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarListComponent = /** @class */ (function () {
    function CarListComponent(carService, router, route) {
        this.carService = carService;
        this.router = router;
        this.route = route;
    }
    CarListComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    CarListComponent.prototype.getCars = function () { };
    CarListComponent.prototype.onClick = function (car) {
        this.router.navigate([car.id], { relative: this.route });
    };
    return CarListComponent;
}());
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=carList.component.js.map