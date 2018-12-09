import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  greetings = 'Welcome to NGRX Workshop!';

  constructor() {}

  ngOnInit() {}
}
