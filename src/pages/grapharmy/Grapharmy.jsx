import React, { useState } from "react";
import Card from "../../components/card/Card";
import CardModel from "../../components/cardModel/CardModel";
import { useSelector } from "react-redux";

const Grapharmy = () => {
  const army = useSelector((state) => state.app.army);
  const [data, setData] = useState(false);
  const selectModel = (modelsProps) => {
    setData(modelsProps);
  };

  return (
    <div className="grapharmy">
      <div className="grapharmy__selected-container">
        {data && <Card props={data} />}
      </div>
      <div className="grapharmy__units-container">
        {army.armyList &&
          army.armyList.map((unit, i) => (
            <CardModel
              props={unit}
              key={`${i}-${unit.name}`}
              fx={() => selectModel(unit)}
            /> //onClick={() => selectModel(unit)}
          ))}
      </div>
    </div>
  );
};

export default Grapharmy;
