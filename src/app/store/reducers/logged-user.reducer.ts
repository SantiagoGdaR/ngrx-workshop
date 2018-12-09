import {
  LoggedUserActions,
  ELoggedUserActions
} from '../actions/logged-user.actions';
import {
  initialLoggedUserState,
  LoggedUserState
} from '../state/logged-user.state';

export const loggedUserReducers = (
  state = initialLoggedUserState,
  action: LoggedUserActions
): LoggedUserState => {
  switch (action.type) {
    case ELoggedUserActions.GetLoggedUser: {
      return {
        ...state,
        loggedUser: {
          name: state.loggedUser.name,
          age: state.loggedUser.age,
          budget: state.loggedUser.budget + 1
        }
      };
    }

    default:
      return state;
  }
};
