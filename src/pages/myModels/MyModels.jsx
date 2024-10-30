import React, { useState } from "react";
import { testData } from "../../data/testData";
import ModelsImages from "../../components/modelsImages/ModelsImages";
import { useDispatch } from "react-redux";
import { addToArmy } from "../../app/appSlice";

const MyModels = () => {
  const dispatch = useDispatch();
  const [maxAmount, setMaxAmount] = useState(3);

  const handleClick = (data) => {
    dispatch(addToArmy(data))
    console.log(data)
  }
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
            onClick={ ()=>handleClick(data) }
            tabIndex={0}
          >{console.log(data.keywords.includes("Epic Hero"))}
          {data.keywords.includes("Epic Hero") && setMaxAmount(1)}
            <ModelsImages imgName={data.image} type={"listedModel"} />
            <p className="my-models__card-text pts">
              {data.point_cost[0].cost}pts
            </p>
            <p className="my-models__card-text modelName">
              {data.point_cost[0].amount > 1
                ? `${data.point_cost[0].amount}x`
                : ""}{" "}
              {data.name}
            </p>

            <p className="my-models__card-text amount">
              {0}/{maxAmount}
            </p>
          </div>
        ))}
    </div>
  );
};

export default MyModels;
