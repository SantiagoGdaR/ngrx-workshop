import { RouterReducerState } from '@ngrx/router-store';

import { LoggedUserState, initialLoggedUserState } from './logged-user.state';
import { initialGithubState, GithubState } from './github.state';

export interface AppState {
  router?: RouterReducerState;
  loggedUser: LoggedUserState;
  github: GithubState;
}

export const initialAppState: AppState = {
  loggedUser: initialLoggedUserState,
  github: initialGithubState
};

export function getInitialState(): AppState {
  return initialAppState;
}
