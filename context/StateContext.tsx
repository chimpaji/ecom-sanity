import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { toast } from 'react-hot-toast';
import { CartItem, Product, Products } from '../pages/types';

export type StateContext = {
  showCart: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  toggleCartItemQuanitity: (id: string, value: 'inc' | 'dec') => void;
  onRemove: (id: string) => void;
  setCartItems: (updatedCartItems: CartItem[]) => void;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setTotalQuantities: Dispatch<SetStateAction<number>>;
};

const Context = createContext<StateContext | null>(null);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onRemove = (id: string) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    if (!foundProduct) return;
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct?.quantity * foundProduct.price
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems((cartItems) => cartItems.filter((item) => item._id !== id));
  };

  const toggleCartItemQuanitity = (id: string, value: string) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    if (!foundProduct) return;
    const index = cartItems.findIndex((item) => item._id === id);
    const newCartItems = cartItems;
    if (value === 'inc') {
      newCartItems[index].quantity++;
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct?.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct?.quantity > 1) {
        newCartItems[index].quantity--;
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct?.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      } else if (foundProduct?.quantity === 1) {
        //removeProduct
        onRemove(id);
      }
    }
  };

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      }) as CartItem[];
      setCartItems(updatedCartItems);
    } else {
      const tempProduct = product as CartItem;
      tempProduct.quantity = quantity;
      setCartItems([...cartItems, tempProduct]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
