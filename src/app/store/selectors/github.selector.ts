import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { GithubState } from './../state/github.state';

const githubState = (state: AppState) => state.github;

export const selectGithubUsers = createSelector(
  githubState,
  (state: GithubState) => state.users
);
