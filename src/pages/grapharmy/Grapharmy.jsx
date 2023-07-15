import React from "react";
import Card from "../../components/card/Card";
import { testData } from "../../data/testData";
const Grapharmy = () => {
  return (
    <div className="grapharmy">
      {testData && testData.map((data, i) => <Card props={data} key={i} />)}
    </div>
  );
};

export default Grapharmy;
