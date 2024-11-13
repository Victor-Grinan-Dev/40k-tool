/**
 * returns true if hero was already included in the army
 * @param {*object} unit = object to check if has been included
 * @param {*array} unitArray = all units already included in the army
 * @returns boolean 
 */
export const isEpicHeroIncluded = (unit, unitArray) => {
  return unitArray.some(unitElement => 
    unitElement.keywords.includes("Epic Hero") && unitElement.name === unit.name
  );
};

/**
 * 
 * @param {*string} unitName name of the unit
 * @param {*array} armyList list of objects containing units
 * @returns a number of instaces of the unit or null 
 */
export const isUnitInArmyList = (unitName, armyList) => {
  return armyList.filter(item => item.name === unitName).length || null;
}


