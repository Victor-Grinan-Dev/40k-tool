import React from "react";

const Habilities = () => {
  return (
    <div>
      {" "}
      <div className="indexCard__habilities">habilities</div>
      <p className="font-rules">
        CORE:
        <span className="font-negrita"> Leader</span>
      </p>
      <div className="indexCard__divisor"></div>
      <span className="font-rules">
        FACTION: <span className="font-negrita">Oath of Moment</span>
      </span>
      <div className="indexCard__divisor"></div>
      {/* unique */}
      <p className="font-rules">
        <span className="font-negrita">Pelt of the Doppegangrel:</span>
        While this model is leading a unit, each time an attack targets that
        unit, subtract 1 from the Hit roll.
      </p>
      <p className="font-rules">
        <span className="font-negrita">Lord of the Wolfkin:</span>
        While this model is leading a unit, each time that unit makes a Charge
        move, until the end of the turn, crushing teeth and claws equipped by
        models in that unit have the{" "}
        <span className="general-rule">[DEVASTATING WOUNDS]</span> ability.
      </p>
      <div className="indexCard__divisor"></div>
    </div>
  );
};

export default Habilities;
