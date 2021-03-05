import { SafeResourceUrl } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { IIngredient } from "./Ingredient.interface";

export interface IPizza{
    piz_id:number;
    piz_nom:string;
    piz_image:string;
    image:Observable<SafeResourceUrl>;
    piz_prix:string;
    ingredients: IIngredient[];
}