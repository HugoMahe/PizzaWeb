import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUtilisateur } from '../Models/utilisateur.interface';

const API_URL = 'http://localhost:8080/api/utilisateur/';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http: HttpClient) { }

  getProfil(mail:string): Observable<IUtilisateur> {
    return this.http.get<IUtilisateur>(API_URL + 'profil/' + mail);
  }
}
