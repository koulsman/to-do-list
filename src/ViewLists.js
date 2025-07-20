import "./App.css";
import { storedList } from "./App";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CreateList from "./CreateList";
import MainMenu from "./MainMenu";
import { useState, useEffect } from "react";
import ViewAndEditList from "./ViewAndEditList";
import CreatedLists from "./CreatedLists";
import { SegmentedControl, Grid, Autocomplete, Button } from "@mantine/core";
import { atom, useAtom } from "jotai";
import { loggedUserAtom, isLoggedInAtom } from "./Login-Signup/LoggedUser";
import axios from "axios";
import Footer from "./Navbar";

function ViewLists() {
  const navigate = useNavigate();
  const [finalList, setFinalList] = useAtom(storedList);
  const [searchResults, setSearchResults] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [segmentedControlValue, setSegmentedControlValue] =
    useState("All Lists");
  const [selectedList, setSelectedList] = useState([]);
  const [loggedUser] = useAtom(loggedUserAtom);
  const [newList, setNewList] = useState([]);
  const [isLoggedIn,setIsLoggedIn] = useState(isLoggedInAtom)

  useEffect(() => {
    async function getLists() {
      try {
        const res = await axios.get(
          `http://localhost:3002/listsById/${loggedUser?._id}`
        );
        setNewList(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getLists();
  }, []);

  useEffect(() => {
    if (segmentedControlValue === "All Lists") {
      setSelectedList(
        finalList.map((element, index) => ({
          ...element,
          originalIndex: index,
        }))
      );
    } else if (segmentedControlValue === "Undone") {
      setSelectedList(
        finalList
          .map((element, index) => ({ ...element, originalIndex: index }))
          .filter((element) => !element.isDone)
      );
    } else if (segmentedControlValue === "isDone") {
      setSelectedList(
        finalList
          .map((element, index) => ({ ...element, originalIndex: index }))
          .filter((element) => element.isDone)
      );
    }
  }, [segmentedControlValue, finalList]);

  function searchHandler(typedValue) {
    setAutocompleteValue(typedValue);
    const mySearch = finalList.filter((element) =>
      element["Mytitle"]
        .trim()
        .toLowerCase()
        .startsWith(typedValue.toLowerCase())
    );
    setSearchResults(mySearch);
  }

  function listDoneHandler(index) {
    setFinalList((prevFinalList) => {
      let updatedFinalList = [...prevFinalList];
      updatedFinalList[index]["isDone"] = !updatedFinalList[index]["isDone"];
      return updatedFinalList;
    });
  }

  return (
    <div>
      <header className="View-header">
        <h1 className="Page"> View all your lists </h1>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          width: "15em",
        }}
      >
        <div style={{ marginBottom: "1em" }}>
          <div span={8} style={{ marginLeft: "1em" }}>
            <Autocomplete
              value={autocompleteValue}
              onChange={searchHandler}
              placeholder="Search lists"
            />
          </div>
          {autocompleteValue === "" ? (
            <div
              span={2}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1em",
              }}
            >
              <SegmentedControl
                color="#03fc88"
                value={segmentedControlValue}
                onChange={setSegmentedControlValue}
                data={["All Lists", "Undone", "isDone"]}
              />
            </div>
          ) : (
            <div>
              <Button
                style={{ marginTop: "1em" }}
                color="#03fc88"
                onClick={() => setAutocompleteValue("")}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>

      {autocompleteValue === ""
        ? selectedList.map((element) => (
            <CreatedLists
              key={element.originalIndex}
              cardHovered={element["Mylist"]}
              cardButton={
                element["isDone"] ? (
                  <button
                    className="buttonDone"
                    onClick={() => listDoneHandler(element.originalIndex)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="buttonDone"
                    onClick={() => listDoneHandler(element.originalIndex)}
                  ></button>
                )
              }
              name={element["Mytitle"]}
              cardIndex={element.originalIndex}
            />
          ))
        : searchResults.map((element, index) => (
            <CreatedLists
              key={index}
              cardHovered={element["Mylist"]}
              cardButton={
                element["isDone"] ? (
                  <button
                    className="buttonDone"
                    onClick={() => listDoneHandler(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="buttonDone"
                    onClick={() => listDoneHandler(index)}
                  ></button>
                )
              }
              name={element["Mytitle"]}
              cardIndex={index}
            />
          ))}
      
          {isLoggedIn ?
          <div> savedlists: {
            (Array.isArray(newList) ? newList : []).map((element, index) => (
              <div key={index}>
                <CreatedLists 
                  cardHovered={newList[index]["list_title"]} 
                  cardButton={newList[index]["list_isDone"] ? 
                    <button className="buttonDone" onClick={() => listDoneHandler(index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                      </svg>
                    </button>
                  : 
                    <button className="buttonDone" onClick={() => listDoneHandler(index)}></button>
                  }
                  name={element["list_title"]} 
                  cardIndex={index} 
                />
              </div>
            ))}</div> : <div>login to save your lists</div>}
          
          

      {/* <footer>
        <Link to="/CreateList">
          <div>Create a New List</div>
        </Link>
        <Link to="/MainMenu">
          <div>Go to Main Menu</div>
        </Link>
      </footer> */}
      <footer>
            <Footer/>
      </footer>
      
      <Routes>
        <Route path=":index" element={<ViewAndEditList />} />
        <Route exact path="/CreateList" element={<CreateList />} />
        <Route exact path="/MainMenu" element={<MainMenu />} />
      </Routes>
    </div>
  );
}

export default ViewLists;

{
  /* {(Array.isArray(newList) ? newList : []).map((element, index) => (
    <div key={index}>
      <CreatedLists 
        cardHovered={newList[index]["list_title"]} 
        cardButton={newList[index]["list_isDone"] ? 
          <button className="buttonDone" onClick={() => listDoneHandler(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
          </button>
        : 
          <button className="buttonDone" onClick={() => listDoneHandler(index)}></button>
        }
        name={element["list_title"]} 
        cardIndex={index} 
      />
    </div>
  ))} */
}
