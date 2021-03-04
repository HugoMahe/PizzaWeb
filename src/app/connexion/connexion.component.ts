import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.estConnecte = true;
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
