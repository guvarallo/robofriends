import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchfield: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchfield: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc',
      }),
    ).toEqual({ searchfield: 'abc' });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };

  const robot = {
    id: 1,
    lastName: 'Silva',
    firstName: 'Test',
    email: 'test@test.com',
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(initialStateRobots, {})).toEqual({
      isPending: false,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      }),
    ).toEqual({
      isPending: true,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [robot],
      }),
    ).toEqual({
      isPending: false,
      robots: [robot],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'error',
      }),
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'error',
    });
  });
});
