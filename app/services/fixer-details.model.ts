export class FixerDetails {
    base: string;
    date: string;
    rates: IRate;
}

export interface IRate {
    [key: string]: number;
}
