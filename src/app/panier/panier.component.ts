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
  totalAPayer : number=0;

  constructor( private readonly cartService : CartService) { }

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
    console.log("affichage du panier");
    console.log(this.cart);
    this.somme();
  }

  payer(){
    console.log("procedure de paiement");
  }

  somme() {
    let total : number = 0
    for(var i= 0; i < this.cart.length; i++)
    {
         total = Number(this.cart[i].piz_prix) + total;
    }
    this.totalAPayer=total;
  }

  

}
