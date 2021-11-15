import React, { useState } from "react";
import { Button, Form, TextArea, Icon, Divider } from "semantic-ui-react";

const AddList = ({ saveList }) => {
  const [listTitle, setListTitle] = useState("");
  const [isAddingList, setIsAddingList] = useState(false);
  const onClickSaveList = async () => {
    setIsAddingList(true);
    await saveList(listTitle);
    setListTitle("");
    setIsAddingList(false);
  };
  const changeListTitle = (e) => {
    setListTitle(e.target.value);
  };
  return (
    <div>
      <h1>Add a new list</h1>
      {!isAddingList && (
        <>
          <Form>
            <TextArea
              value={listTitle}
              placeholder="Enter a title for this List"
              onChange={changeListTitle}
            />
          </Form>
          <Divider horizontal></Divider>
          <Button secondary color="green" onClick={onClickSaveList}>
            <Icon name="plus square outline" />
            Add new list
          </Button>
        </>
      )}
      {isAddingList && <h3>Savind list....</h3>}
    </div>
  );
};
export default AddList;
