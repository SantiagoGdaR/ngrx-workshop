import { Action } from '@ngrx/store';

import { GithubUser } from './../../models/github-user.interface';

export enum EGithubAction {
  GetUsers = '[Github] Get Users',
  GetUsersSuccess = '[Github] Get Users Success'
}

export class GetUsers implements Action {
  readonly type = EGithubAction.GetUsers;
}

export class GetUsersSuccess implements Action {
  readonly type = EGithubAction.GetUsersSuccess;
  constructor(public payload: GithubUser[]) { }
}

export type GithubActions = GetUsers | GetUsersSuccess;
