import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUtilisateur } from '../Models/utilisateur.interface';
import { UtilisateurService } from '../_services/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur!: IUtilisateur;
  constructor(private readonly utilService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilService.getProfil("leo.maze@etudiant.univ-brest.fr").subscribe(data=>
      this.utilisateur = data
    )
  }

}
