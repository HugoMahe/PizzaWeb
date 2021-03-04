import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from './Models/pizza.interface';
import {map, mergeMap} from 'rxjs/operators'
import {ImageService} from './image.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PizzaSearchService {

  private _pizzaListUrl = 'http://localhost:8080/api/pizza/all';
  private _pizzaImageUrl = 'http://localhost:8080/api/pizza/images/';


  constructor(private readonly http: HttpClient, private imgService : ImageService) {

   }

   public getPizzas( ) : Observable<IPizza[]> {
      return this.http.get<IPizza[]>(this._pizzaListUrl).pipe(
        map((pizzas : IPizza[])  => {
          pizzas.forEach((pizza:IPizza) => {
            pizza.image=this.getImagePizza(pizza.piz_id);
            return pizza;
          })
        return pizzas;  
        }));
   }


   /*
   public getPizzas2() : Observable<IPizza[]> {
    Observable<IPizza[]> tr  =  this.http.get<IPizza[]>(this._pizzaListUrl);
    this.http.get<IPizza[]>(this._pizzaListUrl).pipe(.forEach(element => {
      
    });)
   }*/

   public getImagePizza(idParam:number) : Observable<SafeResourceUrl>{
     return this.http.get('http://localhost:8080/api/pizza/images/' + idParam, {responseType:"blob"}).pipe(
      mergeMap(blob => this.imgService.getSafeImageDataUrl(blob))
    );
   }

}
