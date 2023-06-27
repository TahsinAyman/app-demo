import ActionCreator from './ActionCreator';

const actionCreator = new ActionCreator("person-api");

export const fetchRequest = actionCreator.create("fetch");
