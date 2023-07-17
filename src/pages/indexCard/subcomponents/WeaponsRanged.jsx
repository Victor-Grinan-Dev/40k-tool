import React from "react";
import WeaponEntry from "./WeaponEntry";

const WeaponsRanged = (props) => {
  // const { profiles } = props;
  const foo = [1, 2, 3];
  return (
    <div>
      <div className="indexCard__content-heading">
        <div className="indexCard__content-heading-data-icon">O</div>
        <div className="indexCard__content-heading-data-name">
          ranged weapon
        </div>
        <div className="indexCard__content-heading-data">range</div>
        <div className="indexCard__content-heading-data">a</div>
        <div className="indexCard__content-heading-data">bs</div>
        <div className="indexCard__content-heading-data">s</div>
        <div className="indexCard__content-heading-data">ap</div>
        <div className="indexCard__content-heading-data">d</div>
      </div>
      {foo.map((w, i) => (
        <WeaponEntry data={w} key={i} />
      ))}
    </div>
  );
};

export default WeaponsRanged;
