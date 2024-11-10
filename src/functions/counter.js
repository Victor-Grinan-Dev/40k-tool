export const countThisUnitInstances = (armyList, targetUnit) => {
    return armyList.filter(item => JSON.stringify(item) === JSON.stringify(targetUnit)).length;
}