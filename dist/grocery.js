"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grocery = void 0;
class Grocery {
    constructor(Name, Amount, ID, IsFinished) {
        this.IsFinished = false;
        this.IsEdit = false;
        this.ID = ID || 0;
        this.Name = Name;
        this.Amount = Amount;
        this.IsFinished = IsFinished || false; // ts doesn't support overloading of consturctors; work with optional params for constructors
    }
}
exports.Grocery = Grocery;
