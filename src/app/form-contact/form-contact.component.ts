import { Component, OnInit } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  submitted = false;
  reclamations = ['Reclamation','Embauche','Conseil','Formation']
  testValue="Contenu";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {this.submitted=true;}

}
