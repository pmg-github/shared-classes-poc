"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineAdViewModel = exports.MagazineArticleViewModel = exports.MagazineTileViewModel = void 0;
class MagazineTileViewModel {
    constructor() {
        this.reference = null;
        this.title = null;
        this.text = null;
        this.displayDate = null;
        this.displayAuthor = null;
        this.isPremium = null;
        this.imageUrl = null;
    }
}
exports.MagazineTileViewModel = MagazineTileViewModel;
class MagazineArticleViewModel {
    constructor() {
        this.reference = null;
        this.title = null;
        this.text = null;
        this.displayDate = null;
        this.displayAuthor = null;
        this.isPremium = null;
        this.imageUrl = null;
        this.customerReference = null;
    }
}
exports.MagazineArticleViewModel = MagazineArticleViewModel;
class MagazineAdViewModel {
    constructor() {
        this.typeId = 1; // for now only 1 type
        this.imageUrl = null;
        this.customerReference = null;
    }
}
exports.MagazineAdViewModel = MagazineAdViewModel;
