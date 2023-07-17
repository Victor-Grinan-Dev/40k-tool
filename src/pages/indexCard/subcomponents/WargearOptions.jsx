import React from "react";

const WargearOptions = () => {
  return (
    <div className="indexCard__content-wargear font-rules">
      <div className="indexCard__wargear-options">wargear options</div>

      <ul className="list">
        <li className="list-item">
          The Sergeant’s bolt rifle can be replaced with one of the following:
          <ul className="sublist">
            <li className="sublist-item">1 Astartes chainsword</li>
            <li className="sublist-item">1 hand flamer</li>
            <li className="sublist-item">1 plasma pisto</li>
            <li className="sublist-item">1 power weapon</li>
          </ul>
        </li>
        <li className="list-item">
          The Intercessor Sergeant’s close combat weapon can be replaced with
          one of the following
        </li>
        <li className="list-item">
          For every 5 models in this unit, 1 model equipped with a bolt rifle
          can be equipped with 1 Astartes grenade launcher
        </li>
      </ul>
    </div>
  );
};

export default WargearOptions;
