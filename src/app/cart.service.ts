import {Injectable } from '@angular/core';
import {IPizza} from './Models/pizza.interface';
import { TestBed } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  listePizza: IPizza[] = [];

  constructor() { }

  public addPizza(pizza : IPizza) {
    this.listePizza.push(pizza);
  }

  public removePizza( pizza : IPizza){
    if(this.listePizza.length>0){
      const index = this.listePizza.indexOf(pizza);
      if(index > -1){
        this.listePizza.splice(index);
      }
    }
  }

  public emptyCart(){
    this.listePizza=[];
  }

  public  getCart() :  IPizza[]{
    return this.listePizza;
  }


}
