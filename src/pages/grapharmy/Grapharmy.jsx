import React, { useEffect } from "react";
import UnitCard from "../../components/unitCard/UnitCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUnit } from "../../app/appSlice";
import { useNavigate } from "react-router-dom";

const Grapharmy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const army = useSelector((state) => state.app.army);

  const selectModel = (modelsProps) => {
    dispatch(setSelectedUnit(modelsProps))
  };

  useEffect(() => {
    if(army.armyList.length === 0){
      navigate('/mymodels')
    }
    // eslint-disable-next-line
  }, [army.armyList]);
  
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
