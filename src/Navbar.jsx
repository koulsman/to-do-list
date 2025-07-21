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
        height: "3em",
      }}
    >
      {url.pathname === "/ViewLists" ?  (
        <img
          src={Create}
          onMouseOver={() => setListactionIsHovered(true)}
          onMouseOut={() => setListactionIsHovered(false)}
          onClick={() => navigate("/CreateList")}
          style={{
            width: "2em",
            height:"2em",
            background: listactionIsHovered ? "#03fc88" : "rgb(11,80,81)",
            marginRight: "0.5em",
            padding: "0.5em",
            borderRadius: "0.5em",
            border: listactionIsHovered ? "0.1em solid black" : "0.1em solid #03fc88"
          }}
        />
      ) :  <img
          src={View}
          onMouseOver={() => setListactionIsHovered(true)}
          onMouseOut={() => setListactionIsHovered(false)}
          onClick={() => navigate("/ViewLists")}
          style={{
            width:  "2em",
            height:  "2em",
            background: listactionIsHovered ? "#03fc88" : "rgb(11,80,81)",
            marginRight: "0.5em",
            padding: "0.5em",
            borderRadius: "0.5em",
            border: listactionIsHovered ? "0.1em solid black" : "0.1em solid #03fc88"
          }}
        />
      }

      <img
        src={Home}
        onMouseOver={() => setHomeIsHovered(true)}
        onMouseOut={() => setHomeIsHovered(false)}
        onClick={() => navigate("/MainMenu")}
        style={{
          width: "2em",
          height: "2em",
          background: homeIsHovered ? "#03fc88" : "rgb(11,80,81)",
          marginLeft: "0.5em",
          padding: "0.5em",
          borderRadius: "0.5em",
          border: homeIsHovered ? "0.1em solid black" : "0.1em solid #03fc88"
        }}
      />
    </div>
  );
}
