import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { AffichePizzasComponent } from './affiche-pizzas/affiche-pizzas.component';
import {ImageService} from './image.service';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { PanierComponent } from './panier/panier.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AffichePizzasComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProfilComponent,
    ContactsComponent,
    FormContactComponent,
    PanierComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ImageService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
