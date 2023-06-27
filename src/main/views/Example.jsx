export default function Example({ data, events }) {
  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={events.increment}>Increment</button>
      <button onClick={events.decrement}>Decrement</button>
    </div>
  );
}
