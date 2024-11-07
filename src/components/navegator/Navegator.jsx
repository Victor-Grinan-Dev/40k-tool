import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from "../../assets/icon-package/meLogo-white-border.png";
import Menu from "./menu/Menu";

const Navegator = () => {
  const location = useLocation();

  return (
    <div className="navegator">
      <div className="navegator__header">
      <Link className="navegator__nav-link" to={"/"}>
        <img className="navegator__logo" src={logo} alt="logo" />
      </Link>

      <ul className="navegator__list">
        <li className="navegator__item">
          <Link className="navegator__nav-link" to={"mymodels"}>
            My Models
          </Link>
        </li>
        <li className="navegator__item">
          <Link className="navegator__nav-link" to={"grapharmy"}>
            Grapharmy
          </Link>
        </li>
        <Menu />
      </ul>
      </div>

      <div className="utility-bar">
        {location.pathname === "/mymodels" &&
          <div className="utility-bar">
            <input type="text" placeholder="Search" className="utility-bar__search" />
            <div className="utility-bar__select">
              <p>Order by: </p>
              <select className="utility-bar__order">
                <option value="pts">name</option>
                <option value="pts">cheapest</option>
                <option value="pts">expensier</option>
                <option value="pts">movement</option>
              </select>
            </div>
          </div>
        }
        {location.pathname === "/grapharmy" &&
          <div className="grapharmy__selected-container">
            {/* { && <Card props={} />} */}
          </div>
        }

      </div>
    </div>
  );
};

export default Navegator;
