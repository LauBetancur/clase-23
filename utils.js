export const obtenerProductos = async () => {
  const response = await fetch("https://raw.githubusercontent.com/LauBetancur/clase-23/main/data.json");
  const data = await response.json();
  return data.slice(0, 10);
};

export const obtenerProductoPorId = async (id) => {
  const productos = await obtenerProductos();

  for (const producto of productos) {
    if (producto.id === id){
      return producto;
    }
  }
  throw new Error ("Producto no encontrado");
  
}