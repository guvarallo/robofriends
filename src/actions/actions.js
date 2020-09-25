import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants';

import apiConfig from './apiKeys';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://dummyapi.io/data/api/user?limit=30', {
    headers: { 'app-id': apiConfig.apiKey }
  })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data.data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}