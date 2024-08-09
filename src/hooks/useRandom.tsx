import { useQuery } from "@tanstack/react-query";

const getCriptoNumber = async (): Promise<number> => {
  // throw "No se pudo generar el número.";

  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCriptoNumber,
    // retry: false,
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60,
  });

  return {
    randomQuery,
  };
};
