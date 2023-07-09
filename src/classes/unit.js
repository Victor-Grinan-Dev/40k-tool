export class Unit {
  stats = {
    movement: 6,
    toughness: 4,
    armor_save: 2,
    wounds: 5,
    leadership: 6,
    objective_control: 1,
    point_cost: 100,
  };

  rules = {
    core: "Leader",
    faction: "Oath of Moment",
    other: [
      {
        title: "test rule title",
        rule: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti quasi aliquid impedit doloribus neque voluptas quod soluta non architecto deleniti necessitatibus.",
      },
      {
        title: "rule includes global rules",
        rule: "While this model is leading a unit, each time that unit makes a Charge move, until the end of the turn, crushing teeth and claws equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
      },
    ],
  };

  invulnerable = null;

  unit_composition = ["1 Intercessor Sergeant", "4-9 Intercessors"];

  equiped = "";
  wargear_options = "???";
  leader = ["Blood Claws", "Grey Hunters", "Long Fangs", "Wolf Guard"];
  wargear_hability = "";
  specific =
    "Your army cannot contain both <Logan Grimnar> and <Logan Grimnar on Stormrider>";
  attached_unit =
    "If a <Character> unit from your army with the Leader ability can be attached to a <Devastator Squad>, it can instead be attached to this unit";

  keywords = [
    "Infantry",
    "Character",
    "Epic Hero",
    "Imperium",
    "Terminator",
    "Arjac Rockfist",
  ];
  faction_keywords = ["Adeptus Astartes", "Space Wolves"];

  descriptions = "";
  contructor(name) {
    this.name = name;
  }
}
