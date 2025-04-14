import { combineReducers } from 'redux';

/*=========== REDUCERS ============*/
import { surveyReducer } from './reducers/survey-reducer';

export const rootReducer = combineReducers({
  survey: surveyReducer,
});
