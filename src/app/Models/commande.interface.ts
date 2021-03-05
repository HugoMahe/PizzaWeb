import { SafeResourceUrl } from "@angular/platform-browser";
import {IPanierPizza} from './pizza.interface';
import {IUtilisateur} from './utilisateur.interface';

export interface ICommande{
    cmd_id:number,
    cmd_date:string,
    cmd_status:string,
    util_id:number
}

export interface ICommandeSend{
    cmd_date:string,
    cmd_status:string,
    util_id:number
}