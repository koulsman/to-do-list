import "./App.css";
import { storedList } from "./App";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CreateList from "./CreateList";
import MainMenu from "./MainMenu";
import { useState, useEffect } from "react";
import ViewAndEditList from "./ViewAndEditList";
import CreatedLists from "./CreatedLists";
import {
  SegmentedControl,
  Grid,
  Autocomplete,
  Button,
  isElement,
} from "@mantine/core";
import { atom, useAtom } from "jotai";
import { loggedUserAtom, isLoggedInAtom } from "./Login-Signup/LoggedUser";
import axios from "axios";
import Navbar from "./Navbar";
import config from "./config";

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
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInAtom);
  const [allLists, setAllLists] = useState([]);
  useEffect(() => {
    async function getLists() {
      try {
        const res = await axios.get(
          `${config.LISTS_API}/listsById/${loggedUser?._id}`
        );
        setAllLists(res.data);
        setNewList(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getLists();
  }, []);

  useEffect(() => {
    let filtered;

    if (segmentedControlValue === "All Lists") {
      filtered = allLists;
    } else if (segmentedControlValue === "Undone") {
      filtered = allLists.filter((element) => !element.list_isDone);
    } else if (segmentedControlValue === "is Done") {
      filtered = allLists.filter((element) => element.list_isDone);
    }

    setNewList(filtered);
  }, [segmentedControlValue, allLists]);

  function searchHandler(typedValue) {
    console.log(typedValue)
    setAutocompleteValue(typedValue);
    console.log(newList);
    const mySearch = newList.filter((element) =>
      element.list_title
        .trim()
        .toLowerCase()
        .startsWith(typedValue.toLowerCase())
    );
    console.log(mySearch);
    setSearchResults(mySearch);
  }

  useEffect(() => {

  },[searchResults])

  async function isDoneHandler() {}

  async function listDoneHandler(index, lid, isDone) {
    try {
      const response = await axios.post(
        `${config.LISTS_API}/list/isDone/${lid}`
      );
      const updatedList = response.data;

      setNewList((prev) => {
        const newListCopy = [...prev];
        newListCopy[index].list_isDone = updatedList.list_isDone;
        return newListCopy;
      });
    } catch (error) {
      console.log(error);
    }
  }
  // setList((prevFinalList) => {
  //   let updatedFinalList = [...prevFinalList];
  //   updatedFinalList[index]["isDone"] = !updatedFinalList[index]["isDone"];
  //   return updatedFinalList;
  // });

  useEffect(() => {}, [newList]);

  return (
    <div>
      <header className="View-header">
        <Navbar />
        <h1 className="Page">  VIEW ALL YOUR LISTS </h1>
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
                data={["All Lists", "Undone", "is Done"]}
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
      {/* {autocompleteValue === "" &&  } */}
      {autocompleteValue == "" ?
        newList.map((element, index) => {
          return (
            <CreatedLists
              cardHovered={element.list_items}
              cardButton={
                element.list_isDone ? (
                  <button
                    className="buttonDone"
                    onClick={() => listDoneHandler(index, element._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
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
                    onClick={() =>
                      listDoneHandler(index, element._id, element.list_isDone)
                    }
                  ></button>
                )
              }
              name={element.list_title}
              listUrl={element._id}
            />
          );
        })
        :
        searchResults.map((element, index) => {
          return (
            <CreatedLists
              cardHovered={element.list_items}
              cardButton={
                element.list_isDone ? (
                  <button
                    className="buttonDone"
                    onClick={() => listDoneHandler(index, element._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
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
                    onClick={() =>
                      listDoneHandler(index, element._id, element.list_isDone)
                    }
                  ></button>
                )
              }
              name={element.list_title}
              listUrl={element._id}
            />
          );
        })}

      <Routes>
        <Route path=":index" element={<ViewAndEditList />} />
        <Route exact path="/CreateList" element={<CreateList />} />
        <Route exact path="/MainMenu" element={<MainMenu />} />
      </Routes>
    </div>
  );
}

export default ViewLists;
