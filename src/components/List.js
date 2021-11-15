import React from "react";
import "semantic-ui-css/semantic.min.css";
import Card from "./Card";
const List = ({ cards }) => {
  return (
    <div>
      {cards &&
        cards.map((card) => {
          return <Card card={card} />;
        })}
    </div>
  );
};

export default List;
