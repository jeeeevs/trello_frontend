import React, { useEffect, useState } from "react";
import axios from "axios";
import { Segment } from "semantic-ui-react";

import List from "./List";
import AddCard from "./AddCard";
import AddList from "./AddList";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const saveList = async (listTitle) => {
    const list = await axios
      .post(`http://localhost:3000/list`, {
        name: listTitle,
      })
      .then((res) => res.data);
    setLists([{ name: listTitle, _id: list._id, cards: [] }, ...lists]);
    list.name = listTitle;
  };
  const saveCard = async (listId, cardlistTitle) => {
    const card = await axios
      .post(`http://localhost:3000/list/${listId}`, {
        name: cardlistTitle,
      })
      .then((res) => res.data);
    card.name = cardlistTitle;
    const listClone = [...lists];
    const i = listClone.findIndex((list) => list._id === listId);
    listClone[i]["cards"].push(card);
    setLists([...listClone]);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/list")
      .then((response) => setLists(response.data));
  }, []);
  return (
    <div>
      <Segment>
        <AddList saveList={saveList} />
      </Segment>
      {lists.map((list) => (
        <div key={"di_" + list._id}>
          <Segment>
            <h2>{list.name}</h2>
            <List cards={list.cards} />
            <AddCard listId={list._id} saveCard={saveCard} />
          </Segment>
        </div>
      ))}
    </div>
  );
};

export default Lists;
