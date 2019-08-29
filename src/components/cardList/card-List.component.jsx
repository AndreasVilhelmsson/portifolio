import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = props => (
  <div className='cardList'>
    {props.workers.map(worker => (
      <Card key={worker.id} worker={worker} />
    ))}
  </div>
);
