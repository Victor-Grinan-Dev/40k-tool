import React from "react";

const WeaponEntry = (props, key) => {
  const { weapon } = props;
  return (
    <div key={key}>
      <div className="indexCard__content-item">
        <div className="indexCard__content-item-data-icon"></div>
        <div className="indexCard__content-item-data-name">{weapon}</div>
        <div className="indexCard__content-item-data">-</div>
        <div className="indexCard__content-item-data">10</div>
        <div className="indexCard__content-item-data">2+</div>
        <div className="indexCard__content-item-data">8</div>
        <div className="indexCard__content-item-data">-2</div>
        <div className="indexCard__content-item-data">3</div>
      </div>
      <div className="indexCard__divisor"></div>
    </div>
  );
};

export default WeaponEntry;
