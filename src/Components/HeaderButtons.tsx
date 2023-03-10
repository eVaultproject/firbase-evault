import { useState } from "react";
import "./HeaderButtons.css";
 // eslint-disable-next-line
import { BrowserRouter as Route, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";
import { GiCash } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";

const HeaderButtons: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`header-button-container ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/">
      <div className={`header-button ${hover ? "hover" : ""}`}>
        <AiFillHome />
        {hover && (
        <div className="icon-text" style={{ marginLeft: "10px" }}>
        Home
      </div>
    )}
  </div>
</Link>
      <Link to="/pools">
      <div className={`header-button ${hover ? "hover" : ""}`}>
        <BsCashCoin />
        {hover && (
        <div className="icon-text" style={{ marginLeft: "10px" }}>
        Pools
      </div>
    )}
  </div>
</Link>

      <Link to="/farm">
      <div className={`header-button ${hover ? "hover" : ""}`}>
        <GiFarmTractor />
        {hover && (
        <div className="icon-text" style={{ marginLeft: "10px" }}>
        Farm
      </div>
    )}
  </div>
</Link>

      <Link to="/dex">
      <div className={`header-button ${hover ? "hover" : ""}`}>
     <AiOutlineBarChart />
     {hover && (
        <div className="icon-text" style={{ marginLeft: "10px" }}>
        Dex
      </div>
    )}
  </div>
</Link>

<Link to="/lottery">
      <div className={`header-button ${hover ? "hover" : ""}`}>
     <GiCash />
     {hover && (
        <div className="icon-text" style={{ marginLeft: "10px" }}>
        Lottery
      </div>
    )}
  </div>
</Link>

    </div>

  );
};

export default HeaderButtons;
