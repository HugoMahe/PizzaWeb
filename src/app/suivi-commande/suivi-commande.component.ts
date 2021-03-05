import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommande } from '../Models/commande.interface';
import { CommandesService } from '../commandes.service'

@Component({
  selector: 'app-suivi-commande',
  templateUrl: './suivi-commande.component.html',
  styleUrls: ['./suivi-commande.component.css']
})
export class SuiviCommandeComponent implements OnInit {

  commande$!: Observable <ICommande[]>;

  constructor( private readonly cmdService : CommandesService ) { 

  }

  ngOnInit(): void {
    console.log("demarrage du component de suivi");
    this.commande$ = this.cmdService.getCommandes();
  }

}
