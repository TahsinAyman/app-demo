import { useEffect } from "react"
import { dispatch, useSelector } from "react-redux";
import { fetchRequest } from "../service/actions";
import ListOfPerson from "../views/ListOfPerson";

export default function PersonController() {

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  const persons = useSelector(state => state.entities.persons);

  const data = {
    persons
  }
  return <ListOfPerson data={data} />
}