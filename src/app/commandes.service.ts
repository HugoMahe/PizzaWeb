import { Injectable } from '@angular/core';
import {IPizza,IPanierPizza} from './Models/pizza.interface'
import {ICommande} from './Models/commande.interface'
import { IUtilisateur } from './Models/utilisateur.interface';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

ListeCommandes : IPanierPizza[]=[];  

  constructor() { }

  addCommande(commande:ICommande){
    // FAIRE LE PARSING DE L'OBJET COMMANDE ET LE TRANSCRIRE EN JSON

  }

  getCommandes(utilisateur : IUtilisateur){
    // RECUPERER LES COMMANDES ASSOCIEES A UN CLIENT
  }
}
