import React from "react";
import { testData } from "../../data/testData";
import MyModelsCard from "../../components/myModelsCard/MyModelsCard";

const MyModels = () => {
  
  return (
    <div className="my-models">
      {testData &&
        testData.map((data, i) => (
          <MyModelsCard modelData={data} key={i}/>
        ))}
    </div>
  );
};

export default MyModels;
