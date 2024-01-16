export class MagazineTileViewModel {
    reference: string | undefined = undefined;
    title: string | undefined = undefined;
    text: string | undefined = undefined;
    displayDate: Date | undefined = undefined;
    displayAuthor: string | undefined = undefined;
    isPremium: boolean | undefined = undefined;
    imageUrl: string | undefined = undefined;
}

export class MagazineArticleViewModel {
    reference: string | undefined = undefined;
    title: string | undefined = undefined;
    text: string | undefined = undefined;
    displayDate: Date | undefined = undefined;
    displayAuthor: string | undefined = undefined;
    isPremium: boolean | undefined = undefined;
    imageUrl: string | undefined = undefined;
    customerReference: string | undefined = undefined;
}

export class MagazineAdViewModel {
    typeId: number = 1; // for now only 1 type
    imageUrl: string | undefined = undefined;
    customerReference: string | undefined = undefined;
}

export class MagazineMetaDataViewModel {
    title: string | undefined = undefined;;
    portalLogoUrl: string | undefined = undefined;
    coverImageUrl: string | undefined = undefined;
}