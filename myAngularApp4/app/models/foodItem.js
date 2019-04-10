"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoodItem = /** @class */ (function () {
    function FoodItem(id, name, group, description, servingSize, unit, calories, fat, protein, carbs) {
        this.id = id;
        this.name = name;
        this.group = group;
        this.description = description;
        this.servingSize = servingSize;
        this.unit = unit;
        this.calories = calories;
        this.fat = fat;
        this.protein = protein;
        this.carbs = carbs;
        this.facts = {
            'protein': protein,
            'fat': fat,
            'carbs': carbs,
            'calories': calories,
            'servinSize': servingSize
        };
    }
    return FoodItem;
}());
exports.FoodItem = FoodItem;
//# sourceMappingURL=foodItem.js.map