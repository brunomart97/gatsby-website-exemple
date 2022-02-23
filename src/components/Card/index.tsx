import React from "react";

interface CardProps {
  titleCard: string;
  textCard: string;
  colorButton: string;
}

const Card = ({
  titleCard,
  textCard,
  colorButton
}: CardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{titleCard}</h5>
        <p className="card-text">{textCard}</p>
        <a href="#" className={`btn btn-${colorButton}`}>Visitar</a>
      </div>
    </div>
  )
}

export default Card
