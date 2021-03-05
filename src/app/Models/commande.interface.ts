import { SafeResourceUrl } from "@angular/platform-browser";
import { Interface } from "readline";
import {IPanierPizza} from './pizza.interface';
import {IUtilisateur} from './utilisateur.interface';

export interface ICommande{
    panier :IPanierPizza;
    client : IUtilisateur;
}