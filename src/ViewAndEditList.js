import "./App.css";
import { storedList } from "./App";
import { atom, useAtom } from "jotai";

import CreateList from "./CreateList";
import MainMenu from "./MainMenu";
import Card from "./Card";
import { useRef, useState, useCallback } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ViewLists from "./ViewLists";
import ListItem from "./ListItem";
import { isVisible } from "@testing-library/user-event/dist/utils";
import DeleteListModal from "./DeleteListModal";
import { Button } from "@mantine/core";
import addListItem from "./svg/add-listitem.svg";

function ViewAndEditList() {
  const navigate = useNavigate();

  const [finalList, setFinalList] = useAtom(storedList);

  // const [visible, setVisible] = useState(false);
  const { index } = useParams();
  const [list, setList] = useState(finalList[index]["Mylist"][0]);

  const [newArray, setNewArray] = useState("");

  console.log(finalList);
  console.log(list);
  const lista = finalList[index];
  const title = lista["Mytitle"];

  const listitems = lista["Mylist"];
  const newlistitems = finalList[index]["Mylist"][0];

  console.log("new list iutems lewwww");
  console.log(newlistitems);
  const iterator = listitems.values();
  console.log("iteratorrr");
  console.log(iterator);
  let allvalues = null;
  for (const value of iterator) {
    allvalues = [...value] + " ";
  }
  console.log(allvalues);
  console.log("INDEX");
  console.log(index);
  const addListItemHandler = (event) => {
    event.preventDefault();
    console.log(list);
    setList((lista) => {
      // newlistitems.push(" ");
      const nA = [...lista, ""];
      console.log("deixe mou ton final array");
      // console.log(newlistitems);

      console.log(nA);
      setNewArray(nA);
      return nA;
    });
  };

  const deleteList = () => {
    console.log("you want to delete this fucking list");
    finalList.splice(index, 1);
    navigate("/ViewLists");
  };
  console.log("finalListsss");
  console.log(finalList);

  // modal

  // end modal

  const submitList = useCallback(
    (event) => {
      event.preventDefault();

      setFinalList((finalList) => {
        console.log("index");
        console.log(index);
        console.log("set Final List");
        finalList.splice(index, 1, {
          Mytitle: title,
          Mylist: [list],
          isDone: false,
        });
        console.log("console logs inside set final list");
        console.log(finalList);

        return finalList;
      });
      navigate("/ViewLists");

      return finalList;
    },
    [title, list, navigate, index, finalList, setFinalList]
  );

  return (
    <div>
      <h1 className="Page">VIEW AND EDIT LIST</h1>
      <section>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto", justifyContent: "center" }}>
        <div>
        <DeleteListModal finalList={finalList} index={index} />
        </div>
        <div style={{margin: "auto"}} >
        <Card name={title} >
          <div className="list">
            {/* <button onClick={() => setVisible(isVisible => !isVisible)}>Edit the list</button> */}
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
          

            
            
            {list.map((x, index, listItem) => (
              <ListItem
                listItem={x}
                key={index}
                index={index}
                setList={setList}
              ></ListItem>
            ))}

            

            <Button
              style={{
                backgroundColor: "#03fc88",
                color: "black",
                marginInlineEnd: "1em",
              }}
              type="submit"
              onClick={submitList}
            >
              SUBMIT LIST
            </Button>
          </div>
        </Card>
        </div>
        </div>
      </section>
      {/* <section>
            
            <footer>
                <Link to="/CreateList"><div >Create a New List</div></Link>
                <Link to="/MainMenu"><div>Go to Main Menu</div></Link>
                <Link to="/ViewLists"><div>View all your lists</div></Link>
            </footer>
            
            <Routes>
                <Route exact path="/CreateList" element={<CreateList />}>
                </Route>
                <Route exact path="/ViewLists" element={<ViewLists />}>
                </Route>
                <Route exact path="/MainMenu" element={<MainMenu />}>
                </Route>
            </Routes>
            </section> */}
    </div>
  );
}

export default ViewAndEditList;
