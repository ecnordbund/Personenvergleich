export interface Person {
    vorname: string;
    nachname: string;
    gebDat: string;
}
export declare const getScore: (personA: Person, personB: Person) => number;
