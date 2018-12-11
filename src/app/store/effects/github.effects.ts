import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { GetUsers, EGithubAction, GetUsersSuccess } from '../actions/github.actions';
import { GithubApiService } from './../../service/github-api.service';
import { GithubUser } from './../../models/github-user.interface';


@Injectable()
export class GithubEffects {

  constructor(private actions$: Actions, private githubService: GithubApiService) {}


  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EGithubAction.GetUsers),
    switchMap(() => this.githubService.getUsers()),
    switchMap((users: GithubUser[]) => of(new GetUsersSuccess(users)))
  );
}
