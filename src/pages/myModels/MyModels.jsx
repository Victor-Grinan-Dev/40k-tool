import React from "react";
import { testData } from "../../data/testData";
import ModelsImages from "../../components/modelsImages/ModelsImages";
import { useDispatch } from "react-redux";
import { addToArmy } from "../../app/appSlice";

const MyModels = () => {
  const dispatch = useDispatch();
  return (
    <div className="my-models">
      {testData &&
        testData.map((data, i) => (
          <div className="my-models__card" key={i}>
            <p className="my-models__card-text">{data.point_cost[0].cost}pts</p>
            <p className="my-models__card-text">
              {data.point_cost[0].amount > 1
                ? `${data.point_cost[0].amount}x`
                : ""}{" "}
              {data.name}
            </p>

            <ModelsImages imgName={data.image} type={"listedModel"} />
            <button onClick={() => dispatch(addToArmy(data))}>add</button>
          </div>
        ))}
    </div>
  );
};

export default MyModels;
