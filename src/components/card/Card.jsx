import React from "react";
// import image from "../../assets/space_wolves/ArjacRockfist.png";
// import ModelImg from "../modelmg/ModelImg";
import arjac from "../../assets/space_wolves/ArjacRockfist.png";
import bjorn from "../../assets/space_wolves/BjornFellhanded.png";
import bloodClaws from "../../assets/space_wolves/BloodClaws.png";
import cyberwolf from "../../assets/space_wolves/cyberwolf.png";
import fenrisianWolf from "../../assets/space_wolves/fenrisianWolf.png";
import canis_wolfborn from "../../assets/space_wolves/canis_wolfborn.png";
import greyHunters from "../../assets/space_wolves/greyHunters.png";
import haraldDeathwolf from "../../assets/space_wolves/haraldDeathwolf.png";
import ironPriest from "../../assets/space_wolves/ironPriest.png";
import droppod from "../../assets/space_wolves/droppod.png";
import kromDragongaze from "../../assets/space_wolves/kromDragongaze.png";
import lanraider from "../../assets/space_wolves/lanraider.png";
import liutenant from "../../assets/space_wolves/liutenant.png";
import loganGrimnar from "../../assets/space_wolves/LoganGrimnar.png";
import loganStormrider from "../../assets/space_wolves/LoganStormrider.png";
import longFangs from "../../assets/space_wolves/longFangs.png";
import lucas from "../../assets/space_wolves/lucas.png";
import murderfang from "../../assets/space_wolves/murderfang.png";
import njal from "../../assets/space_wolves/njal.png";
import predator from "../../assets/space_wolves/predator.png";
import ragnar from "../../assets/space_wolves/ragnar.png";
import razorback from "../../assets/space_wolves/razorback.png";
import rhino from "../../assets/space_wolves/rhino.png";
import runePriest from "../../assets/space_wolves/runePriest.png";
import skyclaws from "../../assets/space_wolves/skyclaws.png";
import stromwolf from "../../assets/space_wolves/stromwolf.png";
import terminators from "../../assets/space_wolves/terminators.png";
import thunderwolfCavalry from "../../assets/space_wolves/ThunderwolfCavalry.png";
import ulrik from "../../assets/space_wolves/Ulrik.png";
import vendread from "../../assets/space_wolves/vendread.png";
import vindicator from "../../assets/space_wolves/vindicator.png";
import whirlwind from "../../assets/space_wolves/whirlwind.png";
import wolfguard_battle_leader_on_thunderwolf from "../../assets/space_wolves/wolfguard_battle_leader_on_thunderwolf.png";
import wolflord from "../../assets/space_wolves/wolflord.png";
import wolfpriestJumpack from "../../assets/space_wolves/wolfpriest-jumppack.png";
import wulfens from "../../assets/space_wolves/Wulfens.png";

const images = {
  arjac: arjac,
  bjorn: bjorn,
  bloodClaws: bloodClaws,
  cyberwolf: cyberwolf,
  fenrisianWolf: fenrisianWolf,
  canis_wolfborn: canis_wolfborn,
  greyHunters: greyHunters,
  haraldDeathwolf: haraldDeathwolf,
  ironPriest: ironPriest,
  droppod: droppod,
  kromDragongaze: kromDragongaze,
  lanraider: lanraider,
  liutenant: liutenant,
  loganGrimnar: loganGrimnar,
  loganStormrider: loganStormrider,
  longFangs: longFangs,
  lucas: lucas,
  murderfang: murderfang,
  njal: njal,
  predator: predator,
  ragnar: ragnar,
  razorback: razorback,
  rhino: rhino,
  runePriest: runePriest,
  skyclaws: skyclaws,
  stromwolf: stromwolf,
  terminators: terminators,
  thunderwolfCavalry: thunderwolfCavalry,
  ulrik: ulrik,
  vendread: vendread,
  vindicator: vindicator,
  whirlwind: whirlwind,
  wolfguard_battle_leader_on_thunderwolf:
    wolfguard_battle_leader_on_thunderwolf,
  wolflord: wolflord,
  wolfpriestJumpack: wolfpriestJumpack,
  wulfens: wulfens,
};
const Card = ({ props }) => {
  const { name, stats, point_cost, image } = props;
  const {
    armor_save,
    balistic_skill,
    leadership,
    movement,
    objective_control,
    toughness,
    weapon_skill,
    wounds,
  } = stats;
  console.log(props);
  // const name = "thunderwolves ";;
  const points = point_cost[0].cost;
  const models = point_cost[0].amount;
  return (
    <div className="modelCard__header">
      <div className="modelCard__container-left">
        <div className="modelCard__name">
          {models > 1 ? `${models}x` : ""} {name || "Model's name"}
        </div>
        <div className="modelCard__stats-container">
          <div className="modelCard__stat">
            <p>M</p>
            <div className="modelCard__stat-value">{movement}"</div>
          </div>
          <div className="modelCard__stat">
            <p>T</p>
            <div className="modelCard__stat-value">{toughness}</div>
          </div>
          <div className="modelCard__stat">
            <p>SV</p>
            <div className="modelCard__stat-value">{armor_save}+</div>
          </div>
          <div className="modelCard__stat">
            <p>W</p>
            <div className="modelCard__stat-value">{wounds}</div>
          </div>
          <div className="modelCard__stat">
            <p>LD</p>
            <div className="modelCard__stat-value">{leadership}+</div>
          </div>
          <div className="modelCard__stat">
            <p>OC</p>
            <div className="modelCard__stat-value">{objective_control}</div>
          </div>
        </div>
        {/* <p className="modelCard__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
      corrupti quasi aliquid impedit doloribus neque voluptas quod soluta
      non architecto deleniti necessitatibus.
    </p> */}
        <div className="modelCard__point-cost">{points}pts</div>
        <div className="modelCard__wargear-container">
          <div className="modelCard__wargear-container--item">
            power sword {balistic_skill}+
          </div>
          <div className="modelCard__wargear-container--item">
            plasma pistol {weapon_skill}+
          </div>
        </div>
      </div>

      <div className="modelCard__image-container">
        {/* <ModelImg imgName={image} /> */}
        <img
          src={images[image]}
          alt={image}
          className="modelCard__model-image"
        />
      </div>
    </div>
  );
};

export default Card;
