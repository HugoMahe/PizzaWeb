import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '/api/utilisateur/';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http: HttpClient) { }

  getListePizza(): Observable<any> {
    return this.http.get(API_URL + 'profile', { responseType: 'text' });
  }
}
