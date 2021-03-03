import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/authentification/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  connexion(mail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'connexion', {
      mail,
      password
    }, httpOptions);
  }

  inscription(mail: string, password: string, nom: string, prenom: string,
    adresseFacturation: string, telephone: string, adresseLivraison?: string): Observable<any> {
    return this.http.post(AUTH_API + 'inscrire', {
      mail,
      password,
      nom,
      prenom,
      adresseFacturation,
      adresseLivraison,
      telephone
    }, httpOptions);
  }
}
