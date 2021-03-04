import { SafeResourceUrl } from "@angular/platform-browser";
import { Observable } from "rxjs";

export interface IPizza{
    piz_id:number;
    piz_nom:string;
    piz_image:string;
    piz_prix:number;
    image:Observable<SafeResourceUrl>;
}