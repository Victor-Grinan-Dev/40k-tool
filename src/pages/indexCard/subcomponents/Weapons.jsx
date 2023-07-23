import React from "react";
import WeaponEntry from "./WeaponEntry";
import { useSelector } from "react-redux";
const Weapons = () => {
  const weapons = useSelector((state) => state.app.indexCard.equiped);

  return (
    <div>
      <div className="indexCard__content-heading">
        <div className="indexCard__content-heading-data-icon">X</div>
        <div className="indexCard__content-heading-data-name"> weapons</div>
        <div className="indexCard__content-heading-data">range</div>
        <div className="indexCard__content-heading-data">a</div>
        <div className="indexCard__content-heading-data">Hits</div>
        <div className="indexCard__content-heading-data">s</div>
        <div className="indexCard__content-heading-data">ap</div>
        <div className="indexCard__content-heading-data">d</div>
      </div>
      {weapons && weapons.map((w, i) => <WeaponEntry weapon={w} key={i} />)}
    </div>
  );
};

export default Weapons;
