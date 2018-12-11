import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';
import { loggedUserReducers } from './logged-user.reducer';
import { githubReducers } from './github.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  loggedUser: loggedUserReducers,
  github: githubReducers
};
