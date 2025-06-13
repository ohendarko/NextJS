"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  category: string;
  popular?: boolean;
  duration?: string;
  type?: string;
}

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Service) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // const addToCart = (item: CartItem) => {
  //   setCart(prev =>
  //     prev.some(i => i.id === item.id)
  //       ? prev.map(i =>
  //           i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
  //         )
  //       : [...prev, item]
  //   );
  // };
  const addToCart = (service: Service) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === service.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...service, quantity: 1 }];
    });
  };

  // const removeFromCart = (id: string) => {
  //   setCart(prev => prev.filter(item => item.id !== id));
  // };

  const removeFromCart = (serviceId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== serviceId));
  };

    const updateQuantity = (serviceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(serviceId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === serviceId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
