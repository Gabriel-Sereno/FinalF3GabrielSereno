/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../routes/Detail.modules.css";
import { ContextGlobal } from "../components/utils/global.context";


export function Detail() {
  const { id } = useParams();
  const { tema } = useContext(ContextGlobal);
  const [detalle, setDetalle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setDetalle(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    }



    fetchDetail();
  }, [id]);

  return (
    <article
      className="detalle"
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <h2 className="title-detalle">Detalles</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="info">
          <p className="data">Nombre: {detalle.name}</p>
          <p className="data">Email: {detalle.email}</p>
          <p className="data">Celular: {detalle.phone}</p>
        </div>
      )}
      <Link to="/" className="atras">
        Inicio
      </Link>
    </article>
  );
}