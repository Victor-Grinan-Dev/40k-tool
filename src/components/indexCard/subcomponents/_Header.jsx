import React from "react";

const _Header = (props) => {
  const { name, points, image, movement } = props;
  return (
    <div className="indexCard__header">
      <div className="indexCard__container-left">
        <div className="indexCard__point-cost">{points}pts</div>
        <div className="indexCard__name">{name || "Model's name"}</div>
        <div className="indexCard__stats-container">
          <div className="indexCard__stat">
            <p>M</p>
            <div className="indexCard__stat-value">{movement}"</div>
          </div>
          <div className="indexCard__stat">
            <p>T</p>
            <div className="indexCard__stat-value">4</div>
          </div>
          <div className="indexCard__stat">
            <p>SV</p>
            <div className="indexCard__stat-value">5+</div>
          </div>
          <div className="indexCard__stat">
            <p>W</p>
            <div className="indexCard__stat-value">10</div>
          </div>
          <div className="indexCard__stat">
            <p>LD</p>
            <div className="indexCard__stat-value">6+</div>
          </div>
          <div className="indexCard__stat">
            <p>OC</p>
            <div className="indexCard__stat-value">1</div>
          </div>
        </div>
        <p className="indexCard__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          corrupti quasi aliquid impedit doloribus neque voluptas quod soluta
          non architecto deleniti necessitatibus.
        </p>
      </div>
      <div className="indexCard__image-container">
        <img src={image} alt="model" className="indexCard__model-image" />
      </div>
    </div>
  );
};

export default _Header;
