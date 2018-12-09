import { LoggedUser } from '../../models/logged-user.interface';

export interface ILoggedUserState {
  loggedUser: LoggedUser;
}

export const initialUserState: ILoggedUserState = {
  loggedUser: {
    name: 'Jim Morrison',
    age: 75
  }
};
