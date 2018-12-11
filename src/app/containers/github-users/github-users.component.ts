import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/store/state/app.state';
import { selectGithubUsers } from 'src/app/store/selectors/github.selector';
import { GetUsers } from 'src/app/store/actions/github.actions';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {
  users$ = this.store.pipe(select(selectGithubUsers));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

}
