import React from "react";
import { testData } from "../../data/testData";
import ModelsImages from "../../components/modelsImages/ModelsImages";
import { useDispatch } from "react-redux";
import { addToArmy } from "../../app/appSlice";

const MyModels = () => {
  const dispatch = useDispatch();
  return (
    <div className="my-models">
      <div>
        <input type="text" placeholder="Search" />{" "}
        <label htmlFor="">Order by: </label>
        <select>
          <option value="pts">name</option>
          <option value="pts">cheapest</option>
          <option value="pts">expensier</option>
          <option value="pts">movement</option>
        </select>
      </div>

      {testData &&
        testData.map((data, i) => (
          <div
            className="my-models__card"
            key={i}
            onClick={() => dispatch(addToArmy(data))}
          >
            <p className="my-models__card-text">{data.point_cost[0].cost}pts</p>
            <p className="my-models__card-text">
              {data.point_cost[0].amount > 1
                ? `${data.point_cost[0].amount}x`
                : ""}{" "}
              {data.name}
            </p>

            <ModelsImages imgName={data.image} type={"listedModel"} />
            <div>0/3</div>
          </div>
        ))}
    </div>
  );
};

export default MyModels;
