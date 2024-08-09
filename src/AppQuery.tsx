import { useQuery } from "@tanstack/react-query";
import "./App.css";
// import { RandomNumber } from "./assets/components/RandomNumber";

const getCriptoNumber = async (): Promise<number> => {
  // throw "No se pudo generar el número.";

  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

function App() {
  // https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

  const {
    // isLoading,
    isFetching,
    data: number,
    error,
    refetch,
  } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCriptoNumber,
    // retry: false,
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60,
  });

  return (
    <>
      {isFetching ? <h1>"Cargando..."</h1> : <h1>Numero: {number}</h1>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(error)}</div>
      <button disabled={isFetching} onClick={() => refetch()}>
        Nuevo número
      </button>
    </>
  );
}

export default App;
