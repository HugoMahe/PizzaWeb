import { Component, Input, OnInit } from '@angular/core';
import { IPizza } from '../Models/pizza.interface';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() pizza!: IPizza;

  constructor() { }

  ngOnInit(): void {}
}
