"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grocery = void 0;
var Grocery = /** @class */ (function () {
    function Grocery(Name, Amount, ID, IsFinished) {
        this.IsFinished = false;
        this.IsEdit = false;
        this.ID = ID || 0;
        this.Name = Name;
        this.Amount = Amount;
        this.IsFinished = IsFinished || false; // ts doesn't support overloading of consturctors; work with optional params for constructors
    }
    return Grocery;
}());
exports.Grocery = Grocery;
