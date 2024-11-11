import React, { useState } from 'react';
import ModelsImages from "../modelsImages/ModelsImages";


const UnitCard = ({ props, fx }) => {
  /**this is mapped from army units array */
  /** TODO: this is where the units will be created and displayed */
  /**todo: unit contains array of models object */
  /** show image, name, points sum of both */

  const {
     stats,
    point_cost,
    name,
    image,
    wargear_options,
  } = props;
    console.log(props);
    const {
      armor_save,
      balistic_skill,
      leadership,
      movement,
      objective_control,
      toughness,
      weapon_skill,
      wounds,
    } = stats;
  const points = point_cost[0].cost;
  const models = point_cost[0].amount;

    const [hiddeSetting, setHiddeSetting] = useState(true);

    const isDisplay = hiddeSetting ? "none" : "flex";

    const toggleSettings = () => {
      setHiddeSetting(!hiddeSetting);
    };

  return (
    <div className="unit-card" onClick={() => fx()}>
      {/* <p className="unit-card__name">{points}pts</p> */}
      <p className="unit-card__name">
        {/* {models > 1 ? `${models}x` : ""} */}
         {name}
      </p>

      <ModelsImages imgName={image} type={"unit"} />
      {wargear_options || point_cost.length > 1 ? (
        <p className="unit-card__name" onClick={toggleSettings}>
          settings
        </p>
      ) : (
        <p className="unit-card__name">no options</p>
      )}

      {/* <div className="unit-card__settings" style={{ display: isDisplay }}>
        <p className="unit-card__name" onClick={toggleSettings}>
          settings
        </p>
        {point_cost.length > 1 && (
          <div>
            <button className="unit-card__name">+</button>
            <span className="unit-card__name"> size </span>
            <button className="unit-card__name">-</button>
          </div>
        )}
        {wargear_options && (
          <select className="unit-card__settings--select unit-card__name">
            <option value="">weapon 1</option>
            <option value="">weapon 2</option>
          </select>
        )}
      </div> */}
      <p className="unit-card__name">select</p>
    </div>
  );
};

export default UnitCard;