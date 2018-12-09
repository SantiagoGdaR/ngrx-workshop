import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { AppState } from '../../store/state/app.state';
import { selectLoggedUser } from '../../store/selectors/logged-user.selector';
import { GetLoggedUser } from '../../store/actions/logged-user.actions';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  greetings = 'Welcome to NGRX Workshop!';
  loggedUser$ = this._store.pipe(select(selectLoggedUser));

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetLoggedUser());
  }
}
