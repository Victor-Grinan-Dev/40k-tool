import React, { useEffect, useState } from 'react'
import ModelsImages from '../modelsImages/ModelsImages';
import { useDispatch } from "react-redux";
import { addToArmy } from "../../app/appSlice";

const MyModelsCard = ({modelData}, index) => {

    const dispatch = useDispatch();
    const [maxAmount, setMaxAmount] = useState(null);

    const handleClick = (unit) => {
      dispatch(addToArmy(unit))
    }
    
    useEffect(() => {
        // console.log(modelData)
        if(modelData){
            modelData.keywords.includes("Epic Hero") ? setMaxAmount(1) : modelData.keywords.includes("Battleline") ? setMaxAmount(6) : setMaxAmount(3);
        }
    }, [modelData])
    
  return (
      <>
        {modelData && 
            <div
                className="my-models__card"
                key={index}
                onClick={ ()=>handleClick(modelData) }
                tabIndex={0}
            >
                <ModelsImages imgName={modelData?.image} type={"listedModel"} />
                <p className="my-models__card-text pts">
                {modelData?.point_cost[0].cost}pts
                </p>
                <p className="my-models__card-text modelName">
                {modelData?.point_cost[0].amount > 1
                    ? `${modelData.point_cost[0].amount}x`
                    : ""}{" "}
                {modelData?.name}
                </p>
                
                <p className="my-models__card-text amount">
                {0}/{maxAmount}
                </p>
            </div>
        }   
    </>       
  )
}

export default MyModelsCard