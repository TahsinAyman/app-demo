import { useState } from "react"
import Example from "../views/Example";

export default function ExampleController() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  const data = {
    count
  }

  const events = {
    increment, 
    decrement
  }

  return <Example data={data} events={events} />
}