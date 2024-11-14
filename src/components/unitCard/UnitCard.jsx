import React, { useState } from 'react';
import ModelsImages from "../modelsImages/ModelsImages";


const UnitCard = ({ props, fx }) => {
  /**this is mapped from army units array */
  /** TODO: this is where the units will be created and displayed */
  /**todo: unit contains array of models object */
  /** show image, name, points sum of both */

  const {
    // stats,
    point_cost,
    name,
    image,
    wargear_options,
  } = props;
 
  console.log(image)
    // const {
    //   armor_save,
    //   balistic_skill,
    //   leadership,
    //   movement,
    //   objective_control,
    //   toughness,
    //   weapon_skill,
    //   wounds,
    // } = stats;

  const points = point_cost[0].cost;
  const models = point_cost[0].amount;

    const [hiddeSetting, setHiddeSetting] = useState(true);

    const isDisplay = hiddeSetting ? "none" : "flex";

    const toggleSettings = () => {
      setHiddeSetting(!hiddeSetting);
    };

  return (
    <div className="unit-card" onClick={() => fx()}>

      <div className="unit-card_header">

          <div className="icon">icon-1</div>
          <div className="center-icon">center</div>
          <div className="icon">icon-2</div>

      </div>
      <div className="unit-card_image-container">
        <ModelsImages imgName={image} type={"unit"} />
        {/* <img src={ModelsImages[image]} className='unit-card_image' alt="unit img" /> */}
      </div>
      <div className="unit-card_data-container">
        <div className='unit-name'>{name}</div>
      </div>
      <div className="unit-card_action-container">
        <button>_1_</button>
        <button>_2_</button>
        <button>_3_</button>
        <button>_4_</button>
      </div>

    </div>
  );
};

export default UnitCard;