"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineImageArticleCombinationViewModel = exports.MagazineMetaDataViewModel = exports.MagazineAdViewModel = exports.MagazineArticleViewModel = exports.MagazineTileViewModel = void 0;
class MagazineTileViewModel {
    constructor() {
        this.reference = undefined;
        this.title = undefined;
        this.text = undefined;
        this.displayDate = undefined;
        this.displayAuthor = undefined;
        this.isPremium = undefined;
        this.imageUrl = undefined;
    }
}
exports.MagazineTileViewModel = MagazineTileViewModel;
class MagazineArticleViewModel {
    constructor() {
        this.reference = undefined;
        this.title = undefined;
        this.text = undefined;
        this.displayDate = undefined;
        this.displayAuthor = undefined;
        this.isPremium = undefined;
        this.imageUrl = undefined;
        this.customerReference = undefined;
    }
}
exports.MagazineArticleViewModel = MagazineArticleViewModel;
class MagazineAdViewModel {
    constructor() {
        this.typeId = 1; // for now only 1 type
        this.imageUrl = undefined;
        this.customerReference = undefined;
    }
}
exports.MagazineAdViewModel = MagazineAdViewModel;
class MagazineMetaDataViewModel {
    constructor() {
        this.title = undefined;
        this.portalLogoUrl = undefined;
        this.coverImageUrl = undefined;
    }
    ;
}
exports.MagazineMetaDataViewModel = MagazineMetaDataViewModel;
class MagazineImageArticleCombinationViewModel {
    constructor() {
        this.reference = undefined;
        this.article = null;
        this.imageUrl = undefined;
    }
}
exports.MagazineImageArticleCombinationViewModel = MagazineImageArticleCombinationViewModel;
