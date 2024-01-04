"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grocery = void 0;
class Grocery {
    constructor(Name, Amount, IsFinished) {
        this.IsFinished = false;
        this.IsEdit = false;
        this.Name = Name;
        this.Amount = Amount;
        this.IsFinished = IsFinished || false; // ts doesn't support overloading of consturctors; work with optional params for constructors
    }
}
exports.Grocery = Grocery;
