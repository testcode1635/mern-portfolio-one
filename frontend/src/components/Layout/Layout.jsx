import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import MenuBer from "../menus/MenuBer";
import HomePage from "./../pages/Home/HomePage";
import "./Layout.css";

function Layout() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <MenuBer toggle={toggle} />
            <p onClick={handleToggle}>
              {toggle ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
            </p>
          </div>
        </div>
        <div className="container">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default Layout;
