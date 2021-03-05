import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../Models/pizza.interface';
import { PizzaSearchService } from '../pizza-search.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  pizza$!: Observable<IPizza>;

  constructor(private readonly pizService: PizzaSearchService) { }

  ngOnInit(): void {}

  setPizzaDetail(id: number) {
    this.pizza$ = this.pizService.getPizzaDetail(id);
  }

}
