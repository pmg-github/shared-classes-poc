export declare class ViewerTileBaseViewModel {
    reference: string | undefined;
    title: string | undefined;
    isPremium: boolean | undefined;
    imageUrl: string | undefined;
}
export declare class ViewerArticleBaseViewModel {
    reference: string | undefined;
    title: string | undefined;
    description: string | undefined;
    text: string | undefined;
    displayDate: Date | undefined;
    displayAuthor: string | undefined;
    isPremium: boolean | undefined;
    imageUrl: string | undefined;
    customerReference: string | undefined;
}
export declare class ViewerAdBaseViewModel {
    typeId: number;
    imageUrl: string | undefined;
    customerReference: string | undefined;
}
export declare class ViewerCustomerTileViewModel {
    customerReference: string | undefined;
    name: string | undefined;
    brand: string | undefined;
    logoUrl: string | undefined;
    redirectUrl: string | undefined;
}
export declare class MagazineTileViewModel extends ViewerTileBaseViewModel {
}
export declare class MagazineArticleViewModel extends ViewerArticleBaseViewModel {
}
export declare class MagazineAdViewModel extends ViewerAdBaseViewModel {
}
export declare class MagazineCustomerTileViewModel extends ViewerCustomerTileViewModel {
}
export declare class NewsletterTileViewModel extends ViewerTileBaseViewModel {
}
export declare class MagazineMetaDataViewModel {
    title: string | undefined;
    portalLogoUrl: string | undefined;
    coverImageUrl: string | undefined;
}
export declare class MagazineImageArticleCombinationViewModel {
    reference: string | undefined;
    article: MagazineArticleViewModel | null;
    imageUrl: string | undefined;
}
