import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Divider, Icon } from "semantic-ui-react";
const Card = ({ card }) => {
  return (
    <>
      <h4>
        <Icon color="red" name="chevron right" size="large" />
        {card.name}
      </h4>
      <Divider horizontal></Divider>
    </>
  );
};

export default Card;
