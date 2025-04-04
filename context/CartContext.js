import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Método para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    if (isAuthenticated) {
      setCarrito((prev) => [...prev, producto]);
    } else {
      alert('¡Por favor regístrate primero para agregar productos al carrito!');
    }
  };

  // Método para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item._id !== id));
  };

  // Método para autenticar al usuario
  const iniciarSesion = () => {
    setIsAuthenticated(true);
  };

  // Método para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        isAuthenticated,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

