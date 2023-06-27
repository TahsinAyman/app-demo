import { fetchRequest } from "../actions";
import { personActions } from "../features/person";

export const fetchAllPerson = (repository) => (next) => (store) => async (action) => {
  if (action.type !== fetchRequest.type) return next(action);
  const persons = repository.person.fetchAllPerson(); // using repository layer
  next(personActions.addMany(persons));
}