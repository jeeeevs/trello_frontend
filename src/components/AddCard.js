import React, { useState } from "react";
import { Button, Form, TextArea, Icon, Divider } from "semantic-ui-react";

const AddCard = ({ listId, saveCard }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false);
  const changeCardTitle = (e) => {
    setCardTitle(e.target.value);
  };
  const addACard = () => {
    setIsAddingCard(true);
  };
  const onClickSaveCard = async () => {
    await saveCard(listId, cardTitle);
    setIsAddingCard(false);
    setCardTitle("");
  };

  return (
    <div>
      {isAddingCard && (
        <Form>
          <TextArea
            value={cardTitle}
            placeholder="Enter a title for this card"
            onChange={changeCardTitle}
          />
        </Form>
      )}
      <Divider horizontal></Divider>
      {isAddingCard && (
        <Button color="green" onClick={onClickSaveCard}>
          <Icon name="save" />
          Save card
        </Button>
      )}
      {!isAddingCard && (
        <Button primary onClick={addACard}>
          <Icon name="plus square outline" />
          Add a card
        </Button>
      )}
    </div>
  );
};
export default AddCard;
