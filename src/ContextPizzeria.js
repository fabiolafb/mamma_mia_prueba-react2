import { createContext, useState, useEffect } from "react";

const ContextPizzeria = createContext();

// Provider con funciones de datos
const PizzeriaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [sumarCarrito, setSumarCarrito] = useState([]);

  const url = "/pizzas.json";

  //Función que llama a la API
  const obtenerPizzas = async () => {
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    setPizzas(data);
  };

  useEffect(() => {
    obtenerPizzas();
  }, []);

  //Función llenar carrito
  const agregarCarrito = ({ id, img, name, price }) => {
    const pizzaEncontradaIndex = sumarCarrito.findIndex((c) => c.id === id);
    const pizzaEncontrada = { id, img, name, price, count: 1 };

    if (pizzaEncontradaIndex >= 0) {
      sumarCarrito[pizzaEncontradaIndex].count++;
      setSumarCarrito([...sumarCarrito]);
    } else {
      setSumarCarrito([...sumarCarrito, pizzaEncontrada]);
    }
  };

  //Función agregar o quitar pizzas
  const agregar = (i) => {
    sumarCarrito[i].count++;
    setSumarCarrito([...sumarCarrito]);
  };

  const quitar = (i) => {
    const { count } = sumarCarrito[i];
    if (count === 1) {
      sumarCarrito.splice(i, 1);
    } else {
      sumarCarrito[i].count--;
    }
    setSumarCarrito([...sumarCarrito]);
  };

  //Función vaciar carrito
  const vaciarCarrito = () => setSumarCarrito([]);

  return (
    <ContextPizzeria.Provider
      value={{
        pizzas,
        sumarCarrito,
        setSumarCarrito,
        agregarCarrito,
        agregar,
        quitar,
        vaciarCarrito,
      }}
    >
      {children}
    </ContextPizzeria.Provider>
  );
};

// Export del provider
export { PizzeriaProvider };

export default ContextPizzeria;
