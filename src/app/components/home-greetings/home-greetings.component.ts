import { Component, OnInit, Input } from '@angular/core';

import { LoggedUser } from '../../models/logged-user.interface';

@Component({
  selector: 'app-home-greetings',
  templateUrl: './home-greetings.component.html',
  styleUrls: ['./home-greetings.component.css']
})
export class HomeGreetingsComponent implements OnInit {
  @Input()
  greetings: string;
  @Input()
  loggedUser: LoggedUser;

  constructor() {}

  ngOnInit() {}
}
