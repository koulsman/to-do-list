import "./App.css";
import { storedList } from "./App";
import { atom, useAtom } from "jotai";

import CreateList from "./CreateList";
import MainMenu from "./MainMenu";
import Card from "./Card";
import { useRef, useState, useCallback, useEffect } from "react";
import { Link, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ViewLists from "./ViewLists";
import ListItem from "./ListItem";
import { isVisible } from "@testing-library/user-event/dist/utils";
import DeleteListModal from "./DeleteListModal";
import { Button } from "@mantine/core";
import addListItem from "./svg/add-listitem.svg";
import axios from "axios";
import Navbar from "./Navbar";
import config from "./config";

function ViewAndEditList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  const { index } = useParams();

  useEffect(() => {
    console.log("ID from URL:", index);
  }, [index]);
  async function getList() {
    try {
      const response = await axios.get(`${config.LISTS_API}/list/${index}`);
      console.log(response.data);
      setSelectedList(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getList();
  }, [index]);

  // useEffect(() => {

  // },[selectedList])

  function addListItemHandler() {
    setSelectedList((prevList) => ({
      ...prevList,
      list_items: [...prevList.list_items, ""],
    }));
  }

  function editTitleHandler(title) {
    console.log("5")
      console.log(title)
  }

  async function submitEditedList() {
    console.log(selectedList);

    try {
      const response = await axios.post(
        `${config.LISTS_API}/updateList/${selectedList._id}`,
        {
          lid: selectedList._id,
          title: selectedList.list_title,
          list_items: selectedList.list_items,
        }
      );
      console.log(response.data)
      if (response.status === 200) {
      navigate("/ViewLists");
    }
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div>
      <Navbar />
      <h1 className="Page">VIEW AND EDIT LIST</h1>
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <div>
            <DeleteListModal selectedList={selectedList} />
          </div>
          <div style={{ margin: "auto" }}>
            <Card name={selectedList.list_title} >
              <div className="list">
                {/* <button onClick={() => setVisible(isVisible => !isVisible)}>Edit the list</button> */}
                <img
                  style={{
                    height: "2em",
                    width: "2em",
                    // marginTop: "2.6em",
                    background: "#03fc88",
                    borderRadius: "50%",
                  }}
                  src={addListItem}
                  alt="Add List Item"
                  onClick={addListItemHandler}
                />

                {/* {list.map((x, index, listItem) => (
              <ListItem
                // listItem={x}
                key={index}
                index={index}
                setList={setList}
              ></ListItem>
            ))} */}

                {Array.isArray(selectedList.list_items) &&
                  selectedList.list_items.map((element, index) => (
                    <ListItem
                      key={index}
                      index={index}
                      listItem={element}
                      selectedList={selectedList}
                      setSelectedList={setSelectedList}
                    />
                  ))}

                <Button
                  onClick={submitEditedList}
                  style={{
                    backgroundColor: "#03fc88",
                    color: "black",
                    marginInlineEnd: "1em",
                    marginTop: "1em",
                  }}
                  type="submit"
                  // onClick={submitList}
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
