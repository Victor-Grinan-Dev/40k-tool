import React from "react";
import { useSelector } from "react-redux";

const UnitComposition = () => {
  const composition = useSelector(
    (state) => state.app.indexCard.unit_composition
  );
  return (
    <span>
      {console.log(composition)}
      <div className="indexCard__unit-composition">unit composition</div>
      {composition.length > 1 ? (
        <div>
          <ul className="indexCard__unit-composition-list">
            <li className="font-negrita font-rules">1 Intercessor Sergeant</li>
            <li className="font-negrita font-rules">4-9 Intercessors</li>
          </ul>
          <p className="font-rules">
            <span className="font-negrita">Every model is equipped with:</span>
            bolt pistol; bolt rifle; close combat weapon.
          </p>
          <div className="indexCard__divisor"></div>
        </div>
      ) : (
        <div>mama guevo!!!</div>
      )}
    </span>
    // {composition.lenght > 1 &&   }
  );
};

export default UnitComposition;
