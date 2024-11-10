/**
 * returns true if hero was already included in the army
 * @param {*} unit = object to check if has been included
 * @param {*} unitArray = all units already included in the army
 */
export const isEpicHeroIncluded = (unit, unitArray) => {
  return unitArray.some(unitElement => 
    unitElement.keywords.includes("Epic Hero") && unitElement.name === unit.name
  );
};

export const isUnitInArmyList = (unit, armyList) => {
  return armyList.find(item => JSON.stringify(item) === JSON.stringify(unit));
}