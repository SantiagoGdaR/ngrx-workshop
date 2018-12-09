import { Action } from '@ngrx/store';

export enum ELoggedUserActions {
  GetLoggedUser = '[User] Get Logged User'
}

export class GetLoggedUser implements Action {
  public readonly type = ELoggedUserActions.GetLoggedUser;
}

export type LoggedUserActions = GetLoggedUser;
