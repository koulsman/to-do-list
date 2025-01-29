import "./App.css";
import "./CreateList.css";
import Card from "./Card";
import "./Buttons.module.css";
import ListItem from "./ListItem";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import { create } from 'zustand';
// import { useStore } from './zustand';
import { atom, useAtom } from "jotai";
import { storedList } from "./App";
import { useAtomWithStorage } from "jotai/utils";
import { TextInput, Button } from "@mantine/core";
import addListItem from "./svg/add-listitem.svg";

function CreateList() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("input a title");

  const [finalList, setFinalList] = useAtom(storedList);
  const navigate = useNavigate();

  const titleHandler = (event) => {
    event.preventDefault();
    return title;
  };

  const addListItemHandler = (event) => {
    event.preventDefault();
    setList((listItems) => {
      const newArray = [...listItems, ""];
      return newArray;
    });
  };

  console.log(list);

  const formSubmitHandler = useCallback(
    (event) => {
      event.preventDefault();

      setFinalList((finalList) => {
        finalList.push({ Mytitle: title, Mylist: [list], isDone: false });
        console.log("console logs inside set final list");
        console.log(finalList);

        return finalList;
      });
      navigate("/ViewLists");

      return finalList;
    },
    [title, list, navigate]
  );

  return (
    <div className="CreateList">
      <h1 className="Page">CREATE LIST</h1>
     <div style={{ display: "flex", margin: "auto", justifyContent: "center" }}>
      <Card >
        <form onSubmit={formSubmitHandler} className="form">
          <div style={{ color: "00cccc" }}>
            <TextInput
              onChange={(event) => setTitle(event.target.value)}
              placeholder="ADD TITLE"
              styles={{
                input: {
                  padding: "0.5em",
                  width: "6em",
                  backgroundColor: "#03fc88",
                  border: "none",
                  outline: "none",
                  color: "black",
                  fontSize: "1.2em",
                  // marginBottom: '0.5em'
                },
                placeholder: {
                  color: "black",
                  fontSize: "5em",
                  textAlign: "center",
                },
              }}
            />

            {/* <Button style={{ marginTop: '5em',backgroundColor: "#00cccc",color: "black",
          marginInlineEnd: "1em",
        }} 
         </Button> */}
            <img
              style={{
                height: "2em",
                width: "2em",
                marginTop: "2.6em",
                background: "#03fc88",
                borderRadius: "50%",
              }}
              src={addListItem}
              alt="Add List Item"
              onClick={addListItemHandler}
            />
          </div>
          <div>
            {list.map((x, index) => (
              <ListItem
                listItem={x}
                key={index}
                index={index}
                setList={setList}
              />
            ))}
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#03fc88",
                color: "black",
                marginInlineEnd: "1em",
              }}
              type="submit"
            >
              SUBMIT LIST
            </Button>
          </div>
        </form>
      </Card>
      </div>
    </div>
  );
}

export default CreateList;
