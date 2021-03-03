import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUtilisateur } from '../Models/utilisateur.interface';
import { TokenStorageService } from '../_services/token-storage.service';
import { UtilisateurService } from '../_services/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur!: IUtilisateur;
  constructor(private readonly utilService: UtilisateurService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.utilService.getProfil(this.tokenStorageService.getUser().mail).subscribe(data=>
      this.utilisateur = data
    )
  }

}
