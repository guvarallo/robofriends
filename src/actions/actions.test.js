import * as actions from './actions';
import { CHANGE_SEARCH_FIELD } from '../constants';

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'test';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});
