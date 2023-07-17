import React, { useState } from "react";
import Card from "../../components/card/Card";
import CardModel from "../../components/cardModel/CardModel";
// import { testData } from "../../data/testData";
import { useSelector } from "react-redux";
const Grapharmy = () => {
  const army = useSelector((state) => state.app.army);
  const [data, setData] = useState(false);
  const selectModel = (modelsProps) => {
    setData(modelsProps);
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    // <div className="grapharmy">
    //   {testData && testData.map((data, i) => <Card props={data} key={i} />)}
    // </div>
    <div className="grapharmy">
      {data && <Card props={data} />}
      {army &&
        army.map((unit, i) => (
          <CardModel
            props={unit}
            key={`${i}-${unit.name}`}
            fx={() => selectModel(unit)}
          /> //onClick={() => selectModel(unit)}
        ))}
    </div>
  );
};

export default Grapharmy;
