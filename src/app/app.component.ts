import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-app';
  estConnecte = false;
  mail?: string;
  prenom?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.estConnecte = !!this.tokenStorageService.getToken();

    if (this.estConnecte) {
      const user = this.tokenStorageService.getUser();
      console.log(user)
      this.mail = user.mail;
      this.prenom = user.prenom;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
