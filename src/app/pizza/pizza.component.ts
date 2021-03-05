import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../Models/pizza.interface';
import { PizzaSearchService } from '../pizza-search.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizza$!: Observable<IPizza>;

  constructor(private readonly pizService: PizzaSearchService, private readonly cartService: CartService ) { }

  ngOnInit(): void {}

  setPizzaDetail(id: number) {
    this.pizza$ = this.pizService.getPizzaDetail(id);
  }

  ajoutPanier(pizza: IPizza ){
    console.log("button ok");
    console.log(pizza);
    this.cartService.addPizza(pizza);
  }

}
