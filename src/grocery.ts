export class Grocery {
    ID: number;
    Name: string;
    Amount: number;
    IsFinished: boolean = false;
    IsEdit: boolean = false;

    constructor(Name: string, Amount: number, ID?: number, IsFinished?: boolean){
        this.ID = ID || 0;
        this.Name = Name;
        this.Amount = Amount;
        this.IsFinished = IsFinished || false; // ts doesn't support overloading of consturctors; work with optional params for constructors
    }
}