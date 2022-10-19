import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCard = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //Borrar el producto.
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      //   if (count === 0) {
      //     //lo eliminamos del arreglo
      //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //     return rest;
      //   }

      //   return {
      //     ...oldShoppingCart, //desestructuracion de oldShoppingCart
      //     [product.id]: { ...product, count }, //lo que hacemos es el productid apunta a el producto desestrucutado y su contador.
      //   };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
