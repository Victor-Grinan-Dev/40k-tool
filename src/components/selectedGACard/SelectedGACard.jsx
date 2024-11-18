import React from "react";
import ModelsImages from "../modelsImages/ModelsImages";
import { Link } from "react-router-dom";
import { setIndexCard } from "../../app/appSlice";
import { useDispatch } from "react-redux";
import { armoury } from "../../data/armory";

const SelectedGACard = ({ props }) => {

    const { name, stats, point_cost, image, equiped } = props;
    const { weapon_skill, balistic_skill } = stats;
  
    const dispatch = useDispatch();
  
    const points = point_cost[0].cost || 100;
    const models = point_cost[0].amount || 1;
  
    return (
      <div className="selectedGACard">
        <div className="selectedGACard__container-left">
          <div className="selectedGACard__name">
            {models > 1 ? `${models}x` : ""} {name || "Model's name"}
          </div>
          <div className="selectedGACard__stats-container">
            <div className="selectedGACard__stat">
              <p>M</p>
              <div className="selectedGACard__stat-value">{stats.movement || 6}"</div>
            </div>
            <div className="selectedGACard__stat">
              <p>T</p>
              <div className="selectedGACard__stat-value">{stats.toughness || 4}</div>
            </div>
            <div className="selectedGACard__stat">
              <p>SV</p>
              <div className="selectedGACard__stat-value">
                {stats.armor_save || 3}+
              </div>
            </div>
            <div className="selectedGACard__stat">
              <p>W</p>
              <div className="selectedGACard__stat-value">{stats.wounds || 1}</div>
            </div>
            <div className="selectedGACard__stat">
              <p>LD</p>
              <div className="selectedGACard__stat-value">
                {stats.leadership || 6}+
              </div>
            </div>
            <div className="selectedGACard__stat">
              <p>OC</p>
              <div className="selectedGACard__stat-value">
                {stats.objective_control || 1}
              </div>
            </div>
          </div>

          <div className="selectedGACard__point-cost">{points}pts</div>

          <div className="selectedGACard__wargear-container">
            {equiped.map((w, i) => (
              <div className="selectedGACard__wargear-container--item" key={i}>
                {armoury[w]?.name || "missing weapon"}
                {w.range === "melee" ? weapon_skill : balistic_skill}+
              </div>
            ))}
          </div>
        </div>
  
        <div className="selectedGACard__image-container">
          <ModelsImages imgName={image} type="selected" />
        </div>
  
        <div className="selectedGACard__menu-container">
          <Link to={`grapharmy/${name}`} state={props}>
            <div
              className="selectedGACard__menu-item"
              onClick={() => {
                dispatch(setIndexCard(props));
              }}
            >
              details
            </div>
          </Link>
  
          <div className="selectedGACard__menu-item">setting</div>
          <div className="selectedGACard__menu-item">lore</div>
          {<div className="selectedGACard__menu-item">lead</div>}
        </div>
      </div>
  )
}

export default SelectedGACard