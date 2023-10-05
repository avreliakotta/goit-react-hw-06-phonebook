import { nanoid } from 'nanoid';
import { initialState } from './initialState';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_BY_NAME } from './constants';

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts
          ? [...state.contacts, { ...payload, id: nanoid() }]
          : [{ ...payload, id: nanoid() }],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};
