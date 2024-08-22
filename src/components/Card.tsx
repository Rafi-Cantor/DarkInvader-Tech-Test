import React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
  };

const Card: React.FC<CardProps> = ({ title, children }) => (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );

export default Card;