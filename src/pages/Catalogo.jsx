import { useEffect, useState } from "react";
import { Header, Menu } from "../components/Header"
import '../css/Catalogo.css';
import { Footer } from "../components/Footer";

export const Catalogo = () => {

  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [busquedaRealizada, setBusquedaRealizada] = useState("");

  // Fetch a la API de DummyJSON solo si hay búsqueda
  useEffect(() => {
    if (busquedaRealizada.trim() === "") return;

    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setProductos(data.products))
      .catch((error) => console.error("Error al obtener datos", error));
  }, [busquedaRealizada]);

  // Filtrar productos según la búsqueda realizada
  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busquedaRealizada.toLowerCase())
  );

  // Manejar el input
  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
    setMostrarTexto(e.target.value === "");
  };

  // Ejecutar la búsqueda al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setBusquedaRealizada(busqueda);
      setBusqueda("");
      setMostrarTexto(false);
    }
  };



  return (
    <>
      <Menu />
      <Header
        image={'/img/ipho16.png'}
        title="iPhone 16"
      />

      <div className="content-catalogo contenedor">
        <h1 className="text-center degradado testimonial-title">Catálogo de Celulares</h1>

        <input
          className="entrada"
          type="text"
          placeholder="Buscar celular..."
          value={busqueda}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        {mostrarTexto && <p>Busca tu marca de celular de preferencia</p>}

        {/* Mostrar productos solo si hay una búsqueda realizada */}
        {!mostrarTexto && productosFiltrados.length > 0 && (
          <div className="productos">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="producto">
                <img src={producto.thumbnail} alt={producto.title} />
                <h3>{producto.title}</h3>
                <p>💲 {producto.price}</p>
              </div>
            ))}
          </div>
        )}

        {!mostrarTexto && productosFiltrados.length === 0 && <p>No se encontraron productos</p>}
      </div>

      <Footer />

    </>
  )
}
