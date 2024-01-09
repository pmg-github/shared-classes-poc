export declare class Grocery {
    ID: number | null;
    Name: string | null;
    Amount: number | null;
    IsFinished: boolean;
    IsEdit: boolean;
    constructor(ID: number, Name: string, Amount: number, IsFinished: boolean);
}
export declare class GroceryInput {
    Name: string | null;
    Amount: number | null;
}
