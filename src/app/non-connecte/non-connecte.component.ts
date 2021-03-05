import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-connecte',
  templateUrl: './non-connecte.component.html',
  styleUrls: ['./non-connecte.component.css']
})
export class NonConnecteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => 
      {
        this.router.navigateByUrl('connexion')
      },
      2500);
  }

}
