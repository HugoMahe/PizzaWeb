import { CdkMonitorFocus } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CommandesService } from '../commandes.service';
import { ICommandeSend } from '../Models/commande.interface';
import { IPizza } from '../Models/pizza.interface';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  cart!: IPizza[];
  totalAPayer : number=0;
  commande!: ICommandeSend;

  constructor( private readonly cartService : CartService, private readonly cmdServ : CommandesService, private readonly tokenService : TokenStorageService ) { }

  ngOnInit(): void {
    this.commande = {
      cmd_date:"null",
      cmd_status:"EN ATTENTE",
      util_id:-1,
    }
    this.cart=this.cartService.getCart();
    console.log("affichage du panier");
    console.log(this.cart);
    this.somme();
  }

  payer(){
    const user : any =this.tokenService.getUser();
    console.log("ici lancement du paiement")
    this.commande.cmd_date= new Date().toString();
    this.commande.cmd_status="PASSEE";
    this.commande.util_id=user.id;
    this.cmdServ.addCommande(this.commande);
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
