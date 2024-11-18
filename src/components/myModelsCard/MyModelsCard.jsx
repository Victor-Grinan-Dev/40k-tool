import React, { useEffect, useState } from 'react'
import ModelsImages from '../modelsImages/ModelsImages';
import { useDispatch, useSelector } from "react-redux";
import { addToArmyList, addToTotalPts } from "../../app/appSlice";
import { isUnitInArmyList } from '../../functions/validate';

const MyModelsCard = ({modelData}, key) => {

    const dispatch = useDispatch();

    const [unitCount, setUnitCount] = useState(0);
    const armyList = useSelector(state=>state.app.army.armyList);
    const [maxAmount, setMaxAmount] = useState(null);

    useEffect(() => {
        if(modelData){
            setUnitCount(isUnitInArmyList(modelData.name, armyList));
        }
    // eslint-disable-next-line
    }, [armyList]) 
      
    useEffect(() => {
        if(modelData){
            modelData.keywords.includes("Epic Hero") ? setMaxAmount(1) : modelData.keywords.includes("Battleline") ? setMaxAmount(6) : setMaxAmount(3);
        }
    // eslint-disable-next-line
    }, [modelData])

    const handleSelectModel = (unit) => {
        if (unitCount < maxAmount){
            dispatch(addToTotalPts(modelData.point_cost[0].cost))
            dispatch(addToArmyList(unit))
        }
    }

  return (
      <>
        {modelData && 
            <div
                className={unitCount >= maxAmount ? "my-models__card-disabled" :"my-models__card"}
                key={`${modelData.name}${key}`}
                onClick={ ()=>handleSelectModel(modelData) }
                tabIndex={0}
            >
                <ModelsImages imgName={modelData?.image} type={"model"} />
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
                {unitCount||0}/{maxAmount}
                </p>
            </div>
        }   
    </>       
  )
}

export default MyModelsCard