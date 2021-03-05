import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap} from 'rxjs/operators'
import {ImageService} from '../image.service';
import { SafeResourceUrl } from '@angular/platform-browser';

const API_URL = 'http://localhost:8080/api/pizza/';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient, private imgService : ImageService) { }

  getListePizza(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
}
