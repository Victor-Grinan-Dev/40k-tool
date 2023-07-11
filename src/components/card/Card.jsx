import React from "react";
import image from "../../assets/space_wolves/loganGrimnar.png";
const Card = (props) => {
  // const { name, movement, points, image } = props;
  const name = "thunderwolves ";
  const movement = 10;
  const points = 120;
  const models = 6;
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
            <div className="modelCard__stat-value">4</div>
          </div>
          <div className="modelCard__stat">
            <p>SV</p>
            <div className="modelCard__stat-value">3+</div>
          </div>
          <div className="modelCard__stat">
            <p>W</p>
            <div className="modelCard__stat-value">10</div>
          </div>
          <div className="modelCard__stat">
            <p>LD</p>
            <div className="modelCard__stat-value">6+</div>
          </div>
          <div className="modelCard__stat">
            <p>OC</p>
            <div className="modelCard__stat-value">1</div>
          </div>
        </div>
        {/* <p className="modelCard__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
      corrupti quasi aliquid impedit doloribus neque voluptas quod soluta
      non architecto deleniti necessitatibus.
    </p> */}
        <div className="modelCard__point-cost">{points}pts</div>
        <div className="modelCard__wargear-container">
          <div className="modelCard__wargear-container--item">power sword</div>
          <div className="modelCard__wargear-container--item">
            plasma pistol
          </div>
        </div>
      </div>

      <div className="modelCard__image-container">
        <img src={image} alt="model" className="modelCard__model-image" />
      </div>
    </div>
  );
};

export default Card;
