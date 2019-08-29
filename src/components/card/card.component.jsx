import React from "react";
import "./card.style.css";

export const Card = props => (
  <div className='card-container'>
    <img
      src={`https://robohash.org/${props.worker.id}?set=set5&size=180x180`}
      alt='robots'
    />
    <h1>{props.worker.name}</h1>
    <p>{props.worker.email}</p>
  </div>
);
