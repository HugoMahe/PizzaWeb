import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: any = {
    mail: null,
    password: null
  };
  estConnecte = false;
  connectionRate = false;
  messageErreur = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.estConnecte = true;
    }
    
    if (this.estConnecte) {
      setTimeout(() => 
      {
        this.router.navigateByUrl('pizzas')
      },
      1000);
    }
  }

  onSubmit(): void {
    const { mail, password } = this.form;
    
    this.authService.connexion(mail, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.connectionRate = false;
        this.estConnecte = true;
        this.reloadPage();
      },
      err => {
        this.messageErreur = err.error.message;
        this.connectionRate = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
