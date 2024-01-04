import { IsNotEmpty, IsString, IsNumber, MinLength, MaxLength } from 'class-validator';

export class Grocery {
    ID: number | null = null;
    Name: string | null = null;
    Amount: number | null = null;
    IsFinished: boolean = false;
    IsEdit: boolean = false;
}

export class GroceryInput {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    Name: string|null = null;

    @IsNotEmpty()
    @IsNumber()
    Amount: number|null = null;
}