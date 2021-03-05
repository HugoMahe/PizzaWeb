import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { IPizza } from '../Models/pizza.interface';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  cart!: IPizza[];

  constructor( private readonly cartService : CartService) { }

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }

  

}
