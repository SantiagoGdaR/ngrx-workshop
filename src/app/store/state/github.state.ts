import { GithubUser } from './../../models/github-user.interface';


export interface GithubState {
  users: GithubUser[];
}

export const initialGithubState: GithubState = {
  users: []
};
