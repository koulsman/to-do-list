import "./CreateList";
import "./ViewLists";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Info from "./Info";
import { loggedUserAtom, isLoggedInAtom } from "./Login-Signup/LoggedUser";
import { useAtom } from "jotai";
import Login from "./Login-Signup/Login";
import User from "./Login-Signup/User";
import "./Css/SignUp.css";
import { Alert } from "@mantine/core";
import { useState } from "react";

export default function MainMenu() {
  const navigate = useNavigate();
  const [loggedUser] = useAtom(loggedUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [alertModal, setAlertModal] = useState(false);

  console.log(loggedUser);
  console.log("LOGGED USER" + loggedUser);
  // navigation for CreateList and ViewLists
  console.log(isLoggedIn + "ISLOGGEDIN");
  function handleCreateList() {
    if (loggedUser) {
      navigate("/CreateList");
    }
    else {
      showLoggedModal();
    }
  }

  function handleViewLists() {
    if (loggedUser) {
      navigate("/ViewLists");
    }
    else {
      showLoggedModal();
    }
  }
  
   function showLoggedModal() {
    setAlertModal(true)
   }
   function cardHoveredHandler() {}

  return (
    <div>
      {isLoggedIn ? <User className="GreenButton" /> : <Login />}
      <br />
      <br />
      
        {alertModal ?<Alert variant="outline" style={{display: "flex", margin: "auto",width: "14em"}} color="#03fc88" radius="xl" withCloseButton 
        onClose={() => setAlertModal(false)}
         title="You are going over the speed limit, arent you?">
      To create and view your lists it's mandatory to login / sign up! This way, you can view your lists on every device!
      <br/>
      <br/>
      Just click on the Login button to get started!
    </Alert> :
    <div
        className="Menu"
        id="menu"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div onClick={handleCreateList}>
          <Card
            onMouseOver={() => cardHoveredHandler()}
            name="CREATE"
            secondName="a new list"
          />
        </div>

        <div onClick={handleViewLists}>
          <Card
            onMouseOver={() => cardHoveredHandler()}
            name="VIEW"
            secondName="your lists"
          />
        </div>
        </div>}
      
      <Info />
    </div>
  );
}
