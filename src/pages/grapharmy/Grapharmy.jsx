import React from "react";
import Card from "../../components/card/Card";
import { dataTest } from "../../data/dataTest";
const Grapharmy = () => {
  return (
    <div className="grapharmy">
      {dataTest && dataTest.map((data, i) => <Card key={i} data={data} />)}
    </div>
  );
};

export default Grapharmy;
