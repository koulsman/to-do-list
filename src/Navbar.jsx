import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Create from "./svg/create.svg";
import Home from "./svg/home.svg";
import View from "./svg/view.svg";

export default function Navbar() {
  const [homeIsHovered, setHomeIsHovered] = useState(false);
  const [listactionIsHovered, setListactionIsHovered] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isViewOrEdit = pathname === "/ViewLists" || pathname === "/ViewAndEditList";

  const getIconStyle = (isHovered, margin) => ({
    width: "2em",
    height: "2em",
    background: isHovered ? "#03fc88" : "rgb(11,80,81)",
    marginRight: margin === "right" ? "0.5em" : undefined,
    marginLeft: margin === "left" ? "0.5em" : undefined,
    padding: "0.5em",
    borderRadius: "0.5em",
    border: isHovered ? "0.1em solid black" : "0.1em solid #03fc88",
  });

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
      <img
        src={isViewOrEdit ? Create : View}
        onMouseOver={() => setListactionIsHovered(true)}
        onMouseOut={() => setListactionIsHovered(false)}
        onClick={() => navigate(isViewOrEdit ? "/CreateList" : "/ViewLists")}
        style={getIconStyle(listactionIsHovered, "right")}
        alt="action-icon"
      />

      <img
        src={Home}
        onMouseOver={() => setHomeIsHovered(true)}
        onMouseOut={() => setHomeIsHovered(false)}
        onClick={() => navigate("/MainMenu")}
        style={getIconStyle(homeIsHovered, "left")}
        alt="home-icon"
      />
    </div>
  );
}