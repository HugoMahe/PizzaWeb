import { SafeResourceUrl } from "@angular/platform-browser";
import {IPanierPizza} from './pizza.interface';
import {IUtilisateur} from './utilisateur.interface';

export interface ICommande{
    panier :IPanierPizza;
    client : IUtilisateur;
}