export class MagazineTileViewModel {
    reference: string | null = null;
    title: string | null = null;
    text: string | null = null;
    displayDate: Date | null = null;
    displayAuthor: string | null = null;
    isPremium: boolean | null = null;
    imageUrl: string | null = null;
}

export class MagazineArticleViewModel {
    reference: string | null = null;
    title: string | null = null;
    text: string | null = null;
    displayDate: Date | null = null;
    displayAuthor: string | null = null;
    isPremium: boolean | null = null;
    imageUrl: string | null = null;
    customerReference: string | null = null;
}

export class MagazineAdViewModel {
    typeId: number = 1; // for now only 1 type
    imageUrl: string | null = null;
    customerReference: string | null = null;
}