/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import "./Card.modules.css";
import { useState } from "react";

export function Card({ id, name, username }) {
  const odontologo = {
    id,
    name,
    username,
  };
  const [mensaje, setMensaje] = useState(false);

  const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
  const isFavorite = odontologos.some((e) => e.id === odontologo.id);

  const toggleFavorite = () => {
    let updatedOdontologos;
    if (isFavorite) {
      updatedOdontologos = odontologos.filter((e) => e.id !== odontologo.id);
      setMensaje(true);
    } else {
      updatedOdontologos = [...odontologos, odontologo];
      setMensaje(true);
    }

    localStorage.setItem("odontologos", JSON.stringify(updatedOdontologos));

    setTimeout(() => {
      setMensaje(false);
    }, 2000);
  };

  return (
    <article className={`card ${isFavorite ? "favorite" : ""}`}>
      <Link to={`/details/${id}`} className="card-link">
        <img className="imagen" src={img} alt="doctor" />
        <p className="name">{name}</p>
        <p className="user">{odontologo.username}</p>
      </Link>
      <button className={`boton-card${isFavorite ? "-delete" : ""}`} onClick={toggleFavorite}>
        {isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
      </button>
      {mensaje && (
        <p className={`mensaje-card ${isFavorite ? "added" : ""}`}>
          {isFavorite ? "El odontólogo eliminado de favoritos" : "El odontólogo añadido a favoritos"}
        </p>
      )}
    </article>
  );
}