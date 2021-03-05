import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichePizzasComponent } from './affiche-pizzas/affiche-pizzas.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NonConnecteComponent } from './non-connecte/non-connecte.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'pizzas', component: AffichePizzasComponent },
  { path: 'nonConnecte', component: NonConnecteComponent },
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: '**', component: PageNonTrouveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
