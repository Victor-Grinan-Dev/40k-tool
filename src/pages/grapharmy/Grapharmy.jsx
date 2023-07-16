import React, { useState } from "react";
import Card from "../../components/card/Card";
import CardModel from "../../components/cardModel/CardModel";
import { testData } from "../../data/testData";
const Grapharmy = () => {
  const [data, setData] = useState(false);
  const selectModel = (modelsProps) => {
    setData(modelsProps);
  };
  return (
    // <div className="grapharmy">
    //   {testData && testData.map((data, i) => <Card props={data} key={i} />)}
    // </div>
    <div className="grapharmy">
      {data && <Card props={data} />}
      {testData &&
        testData.map((data, i) => (
          <CardModel props={data} key={i} onClick={() => selectModel(data)} />
        ))}
    </div>
  );
};

export default Grapharmy;
