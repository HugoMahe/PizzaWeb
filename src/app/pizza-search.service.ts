import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from './Models/pizza.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaSearchService {

  private _pizzaListUrl = 'http://localhost:8080/api/pizza/all';


  constructor(private readonly http: HttpClient) {

   }

   public getPizzas( ) : Observable<IPizza[]> {
     return this.http.get<IPizza[]>(this._pizzaListUrl)
   }

}
