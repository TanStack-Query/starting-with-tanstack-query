// import { useQuery } from "@tanstack/react-query";
// import { RandomNumber } from './assets/components/RandomNumber';
import "./App.css";
import { useRandom } from "./hooks/useRandom";

function App() {
  // https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? (
        <h1>"Cargando..."</h1>
      ) : (
        <h1>Numero: {randomQuery.data}</h1>
      )}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(randomQuery.error)}</div>
      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >
        Nuevo número
      </button>
    </>
  );
}

export default App;
