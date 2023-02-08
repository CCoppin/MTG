import { useQueries } from "@tanstack/react-query";

export const fetchMagic = async () => {
  const response = await fetch("https://api.magicthegathering.io/v1/cards");
  const data = await response.json();
  return data;
};

const fetchMagicById = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  export const useMagics = (magics: string[]) => {
    const userQueries = useQueries({
      queries: magics.map((magic, index) => {
        return {
          queryKey: ["magic", `magic-${index}`],
          queryFn: () => fetchMagicById(magic),
        };
      }),
    });
  
    return userQueries;
  };