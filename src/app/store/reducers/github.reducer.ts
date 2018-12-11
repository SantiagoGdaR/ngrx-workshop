import { initialGithubState } from '../state/github.state';
import { GithubState } from './../state/github.state';
import { EGithubAction } from '../actions/github.actions';
import { GithubActions } from './../actions/github.actions';

export const githubReducers = (
  state = initialGithubState,
  action: GithubActions): GithubState => {
  switch (action.type) {
    case EGithubAction.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }

    default:
      return state;
  }
};
