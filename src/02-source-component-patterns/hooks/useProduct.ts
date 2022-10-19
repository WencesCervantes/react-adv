import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue); //lo que esta linea hace es que no pueda ser un valor menor a 0

    onChange && onChange({ count: newValue, product }); //esta codigo funciona como un if, si onchange no es nulo, entonces ejecuta la funcion, sino, no hagas nada.
  };

  useEffect(() => {
    //este es el que se encarga de que se refleje el contador en los productos del carrito
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
