import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Create from "./svg/create.svg";
import Home from "./svg/home.svg";
import View from "./svg/view.svg"
export default function Navbar() {
  const [homeIsHovered, setHomeIsHovered] = useState(false);
  const [listactionIsHovered, setListactionIsHovered] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {}, [homeIsHovered]);

  let url = useLocation();
  console.log("Params", url.pathname);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "transparent",
        justifyContent: "center",
        alignItems: "center",
        height: "6em",
      }}
    >
      {url.pathname === "/ViewLists" ?  (
        <img
          src={Create}
          onMouseOver={() => setListactionIsHovered(true)}
          onMouseOut={() => setListactionIsHovered(false)}
          onClick={() => navigate("/CreateList")}
          style={{
            width: listactionIsHovered ? "2.2em" : "2em",
            height:listactionIsHovered ? "2.2em" : "2em",
            background: listactionIsHovered ? "#03fc88" : "rgb(11,80,81)",
            marginRight: "0.5em",
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "0.1em solid black"
          }}
        />
      ) :  <img
          src={View}
          onMouseOver={() => setListactionIsHovered(true)}
          onMouseOut={() => setListactionIsHovered(true)}
          onClick={() => navigate("/ViewLists")}
          style={{
            width: listactionIsHovered ? "2.2em" : "2em",
            height: listactionIsHovered ? "2.2em" : "2em",
            background: listactionIsHovered ? "#03fc88" : "rgb(11,80,81)",
            marginRight: "0.5em",
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "0.1em solid black"
          }}
        />
      }

      <img
        src={Home}
        onMouseOver={() => setHomeIsHovered(true)}
        onMouseOut={() => setHomeIsHovered(false)}
        onClick={() => navigate("/MainMenu")}
        style={{
          width: homeIsHovered ? "2.2em" : "2em",
          height: homeIsHovered ? "2.2em" : "2em",
          background: homeIsHovered ? "#03fc88" : "rgb(11,80,81)",
          marginLeft: "0.5em",
          padding: "0.5em",
          borderRadius: "0.5em",
          border: "0.1em solid black"
        }}
      />
    </div>
  );
}
