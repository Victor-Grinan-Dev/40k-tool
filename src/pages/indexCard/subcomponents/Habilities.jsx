import React from "react";
import { useSelector } from "react-redux";

const Habilities = () => {
  const abilities = useSelector((state) => state.app.indexCard.abilities);
  const { core, faction } = abilities;
  return (
    <div>
      <div className="indexCard__habilities">abilities</div>
      {abilities && (
        <>
          <p className="font-rules">
            CORE:
            {core.map((ca, i) => (
              <>
                <span className="font-negrita" key={i}>
                  {" "}
                  {ca}
                </span>
                <span className="font-negrita">
                  {console.log(i, core.length - 1)}
                  {i !== core.length - 1 ? ", " : "."}
                </span>
              </>
            ))}
          </p>
          <div className="indexCard__divisor"></div>
        </>
      )}
      {abilities && (
        <span className="font-rules">
          FACTION: <span className="font-negrita">{abilities.faction}</span>
        </span>
      )}
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
