"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineMetaDataViewModel = exports.MagazineAdViewModel = exports.MagazineArticleViewModel = exports.MagazineTileViewModel = exports.GroceryInput = exports.Grocery = void 0;
// Import and re-export your modules
const grocery_1 = require("./grocery");
Object.defineProperty(exports, "Grocery", { enumerable: true, get: function () { return grocery_1.Grocery; } });
Object.defineProperty(exports, "GroceryInput", { enumerable: true, get: function () { return grocery_1.GroceryInput; } });
const magazine_1 = require("./models/magazine");
Object.defineProperty(exports, "MagazineTileViewModel", { enumerable: true, get: function () { return magazine_1.MagazineTileViewModel; } });
Object.defineProperty(exports, "MagazineArticleViewModel", { enumerable: true, get: function () { return magazine_1.MagazineArticleViewModel; } });
Object.defineProperty(exports, "MagazineAdViewModel", { enumerable: true, get: function () { return magazine_1.MagazineAdViewModel; } });
Object.defineProperty(exports, "MagazineMetaDataViewModel", { enumerable: true, get: function () { return magazine_1.MagazineMetaDataViewModel; } });
