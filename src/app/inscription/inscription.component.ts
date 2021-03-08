import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form: any = {
    mail: null,
    password: null,
    nom: null,
    prenom: null,
    adresseFacturation: null,
    adresseLivraison: null,
    telephone: null
  };
  aReussi = false;
  aRate = false;
  messageErreur = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    const { mail, password, nom, prenom, adresseFacturation, adresseLivraison, telephone } = this.form;
    
    this.authService.inscription(mail, password, nom, prenom, adresseFacturation, telephone, adresseLivraison ).subscribe(
      data => {
        this.aReussi = true;
        this.aRate = false;
      },
      err => {
        this.messageErreur = err.error.message;
        this.aRate = true;
      }
    );
  }
}
