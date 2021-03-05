import { IAllergene } from "./allergene.interface";

export interface IIngredient{
    igd_id:number;
    igd_nom:string;
    igd_prix:string;
    allergenes: IAllergene[];
}