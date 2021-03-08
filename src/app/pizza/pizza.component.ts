import { Component, Input, OnInit } from '@angular/core';
import { IPizza } from '../Models/pizza.interface';
import { PizzaSearchService } from '../pizza-search.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() pizza!: IPizza;

  constructor(private readonly pizService: PizzaSearchService, private readonly cartService: CartService ) { }

  ngOnInit(): void {}
/*
  setPizzaDetail(id: number) {
    this.pizza$ = this.pizService.getPizzaDetail(id);
  }
*/
}
