import { githubReducers } from './github.reducer';
import { initialGithubState } from '../state/github.state';

describe('Github Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = githubReducers(initialGithubState, action);

      expect(result).toBe(initialGithubState);
    });
  });
});
