import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';
import { loggedUserReducers } from './logged-user.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  loggedUser: loggedUserReducers
};
