import { Injectable } from '@angular/core';
import {IPizza,IPanierPizza} from './Models/pizza.interface'
import {ICommande, ICommandeSend} from './Models/commande.interface'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

ListeCommandes : IPanierPizza[]=[];  
private _commandeListUrl='http://localhost:8080/api/commande/all';
private _commandePostUrl='http://localhost:8080/api/commande/commandeCreation'

  constructor(private readonly http: HttpClient,) { }

  addCommande(commande:ICommandeSend){
    // FAIRE LE PARSING DE L'OBJET COMMANDE ET LE TRANSCRIRE EN JSON
    console.log("ajout de la commande");
    console.log(commande);
    return this.http.post(this._commandePostUrl, {
      "cmd_date":commande.cmd_date,
      "cmd_status":commande.cmd_status,
      "util_id":commande.util_id
    }).subscribe();
  }

  getCommandes() : Observable<ICommande[]>  {
    // RECUPERER LES COMMANDES ASSOCIEES A UN CLIENT
    console.log("lancement du service de récuperation des commandes");
    return this.http.get<ICommande[]>(this._commandeListUrl)
  }
}
