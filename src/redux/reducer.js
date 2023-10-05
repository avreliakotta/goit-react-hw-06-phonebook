import { combineReducers } from 'redux';
import { contactsReducer } from './contact/reducer';
export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
