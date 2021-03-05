import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public nom?:string;
  public mail?:string;
  public type?:string;
  public description?:string;

  constructor(
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
