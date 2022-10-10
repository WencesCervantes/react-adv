import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0)); //lo que esta linea hace es que no pueda ser un valor menor a 0
  };

  return {
    counter,
    increaseBy,
  };
};
