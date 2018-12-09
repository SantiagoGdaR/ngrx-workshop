import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-greetings',
  templateUrl: './home-greetings.component.html',
  styleUrls: ['./home-greetings.component.css']
})
export class HomeGreetingsComponent implements OnInit {
  @Input()
  greetings: string;

  constructor() {}

  ngOnInit() {}
}
