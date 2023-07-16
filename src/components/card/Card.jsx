import React from "react";
import ModelsImages from "../modelsImages/ModelsImages";

const Card = ({ props }) => {
  const { name, stats, point_cost, image } = props;
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
  // console.log(props);
  // const name = "thunderwolves ";;
  const points = point_cost[0].cost;
  const models = point_cost[0].amount;
  return (
    <div className="modelCard__header">
      <div className="modelCard__container-left">
        <div className="modelCard__name">
          {models > 1 ? `${models}x` : ""} {name || "Model's name"}
        </div>
        <div className="modelCard__stats-container">
          <div className="modelCard__stat">
            <p>M</p>
            <div className="modelCard__stat-value">{movement}"</div>
          </div>
          <div className="modelCard__stat">
            <p>T</p>
            <div className="modelCard__stat-value">{toughness}</div>
          </div>
          <div className="modelCard__stat">
            <p>SV</p>
            <div className="modelCard__stat-value">{armor_save}+</div>
          </div>
          <div className="modelCard__stat">
            <p>W</p>
            <div className="modelCard__stat-value">{wounds}</div>
          </div>
          <div className="modelCard__stat">
            <p>LD</p>
            <div className="modelCard__stat-value">{leadership}+</div>
          </div>
          <div className="modelCard__stat">
            <p>OC</p>
            <div className="modelCard__stat-value">{objective_control}</div>
          </div>
        </div>
        {/* <p className="modelCard__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
      corrupti quasi aliquid impedit doloribus neque voluptas quod soluta
      non architecto deleniti necessitatibus.
    </p> */}
        <div className="modelCard__point-cost">{points}pts</div>
        <div className="modelCard__wargear-container">
          <div className="modelCard__wargear-container--item">
            power sword {balistic_skill}+
          </div>
          <div className="modelCard__wargear-container--item">
            plasma pistol {weapon_skill}+
          </div>
        </div>
      </div>

      <div className="modelCard__image-container">
        {/* {console.log(image)} */}
        <ModelsImages imgName={image} />
        {/* <img
          src={images[image]}
          alt={image}
          className="modelCard__model-image"
        /> */}
      </div>
    </div>
  );
};

export default Card;
