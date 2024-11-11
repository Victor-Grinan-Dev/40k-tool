import React, { useState } from "react";
import UnitCard from "../../components/unitCard/UnitCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUnit } from "../../app/appSlice";

const Grapharmy = () => {
  const dispatch = useDispatch();
  const army = useSelector((state) => state.app.army);
  const [data, setData] = useState(false);

  const selectModel = (modelsProps) => {
    dispatch(setSelectedUnit(modelsProps))
  };

  return (
    <div className="grapharmy">

      <div className="grapharmy__units-container">
        {army.armyList &&
          army.armyList.map((unit, i) => (
            <UnitCard
              props={unit}
              key={`${i}-${unit.name}`}
              fx={() => selectModel(unit)}
            />
          ))}
      </div>
    </div>
  );
};

export default Grapharmy;
