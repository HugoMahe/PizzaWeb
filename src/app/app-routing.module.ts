import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichePizzasComponent } from './affiche-pizzas/affiche-pizzas.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'pizzas', component: AffichePizzasComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'panier', component: PanierComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
