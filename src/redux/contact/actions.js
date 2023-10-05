import { ADD_CONTACT, DELETE_CONTACT, FILTER_BY_NAME } from './constants';

export const addContacts = value => ({
  type: ADD_CONTACT,
  payload: value,
});
export const deleteContacts = contactId => ({
  type: DELETE_CONTACT,
  payload: contactId,
});
export const setFilterByName = filter => ({
  type: FILTER_BY_NAME,
  payload: filter,
});
