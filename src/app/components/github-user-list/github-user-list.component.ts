import { Component, OnInit, Input } from '@angular/core';

import { GithubUser } from './../../models/github-user.interface';

@Component({
  selector: 'app-github-user-list',
  templateUrl: './github-user-list.component.html',
  styleUrls: ['./github-user-list.component.css']
})
export class GithubUserListComponent implements OnInit {
  @Input()
  users: GithubUser[];


  constructor() { }

  ngOnInit() {
  }

}
