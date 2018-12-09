import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { LoggedUserState } from '../state/logged-user.state';

const loggedUser = (state: AppState) => state.loggedUser;

export const selectLoggedUser = createSelector(
  loggedUser,
  (state: LoggedUserState) => state.loggedUser
);
