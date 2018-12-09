import { LoggedUser } from '../../models/logged-user.interface';

export interface LoggedUserState {
  loggedUser: LoggedUser;
}

export const initialLoggedUserState: LoggedUserState = {
  loggedUser: {
    name: 'Jim Morrison',
    age: 75,
    budget: 0
  }
};
