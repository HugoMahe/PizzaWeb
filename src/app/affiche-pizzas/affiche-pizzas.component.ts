import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../Models/pizza.interface';
import { PizzaSearchService } from '../pizza-search.service';

@Component({
  selector: 'app-affiche-pizzas',
  templateUrl: './affiche-pizzas.component.html',
  styleUrls: ['./affiche-pizzas.component.css']
})
export class AffichePizzasComponent implements OnInit {

  //pizzaList:PizzaModule[]=[];
  pizzaCount?:number;
  pizza$!: Observable<IPizza []>;


  constructor(private readonly pizService: PizzaSearchService  ) {

    
  }

  ngOnInit() {
    console.log("demarrage de la requete");
    this.pizza$=this.pizService.getPizzas();
    this.getPizzaCount();
  }

  getPizzaCount(){
    this.pizService.getPizzas().subscribe(data => {
      this.pizzaCount=data.length;
      console.log(this.pizzaCount)
      console.log(data);
    });
  }

}
