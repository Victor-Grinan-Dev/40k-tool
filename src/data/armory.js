export const armoury = {
  foehammer: {
    name: "Foehammer",
    profiles: {
      ranged: {
        profile: "ranged",
        rules: ["ANTI-MONSTER 2+", "ASSAULT"],
        range: 6,
        a: "1",
        bs: 0,
        s: "8",
        ap: "2",
        d: "3",
      },
      melee: {
        profile: "melee",
        rules: ["anti-monster 2+"],
        range: "melee",
        a: "5",
        ws: 0,
        s: "8",
        ap: "2",
        d: "3",
      },
    },
  },
  assault_cannon: {
    name: "Assault cannon",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["DEVASTATING WOUNDS"],
        range: 24,
        a: 6,
        bs: 0,
        s: "6",
        ap: "0",
        d: "1",
      },
    },
  },
  heavy_flamer: {
    name: "Heavy flamer",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["IGNORES COVER", "TORRENT"],
        range: 12,
        a: "d6",
        bs: "n/a",
        s: "5",
        ap: "1",
        d: "1",
      },
    },
  },
  twin_lascannon: {
    name: "Twin lascannon",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["MELTA 2"],
        range: 48,
        a: "1",
        bs: 0,
        s: "12",
        ap: "3",
        d: "d6 + 1",
      },
    },
  },
  heavy_plasma_cannon: {
    name: "Heavy plasma cannon",
    profiles: {
      standard: {
        profile: "ranged",
        rules: ["BLAST"],
        range: 36,
        a: "d3",
        bs: 0,
        s: "7",
        ap: "2",
        d: "2",
      },
      supercharge: {
        profile: "melee",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        a: "d3",
        ws: 2,
        s: "8",
        ap: "3",
        d: "3",
      },
    },
  },
  hellfrost_cannon: {
    name: "Heavy plasma cannon",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT]"],
        range: 12,
        a: "d3",
        bs: "n/a",
        s: "6",
        ap: "1",
        d: "2",
      },
      focused: {
        profile: "focused",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        a: "1",
        bs: 0,
        s: "9",
        ap: "3",
        d: "5",
      },
    },
  },
  combi_weapon: {
    name: "Combi weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-INFANTRY 4+", "DEVASTATING WOUNDS", "RAPID FIRE 1"],
        range: 24,
        a: "1",
        bs: 1, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        ap: "0", //always positive
        d: "1", // always string type
      },
    },
  },
  flamer: {
    name: "Flamer",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["IGNORES COVER", "TORRENT"],
        range: 12,
        a: "D6",
        bs: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        ap: "0", //always positive
        d: "1", // always string type
      },
    },
  },
  grav_gun: {
    name: "Grav-gun",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-VEHICLE 2+"],
        range: 18,
        a: "2",
        bs: "3", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "5",
        ap: "1", //always positive
        d: "2", // always string type
      },
    },
  },
  grav_pistol: {
    name: "Grav-pistol",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-VEHICLE 2+", "PISTOL"],
        range: 18,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        ap: "1", //always positive
        d: "2", // always string type
      },
    },
  },
  hand_flamer: {
    name: "Hand flamer",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["IGNORES COVER", "TORRENT", "PISTOL"],
        range: 12,
        a: "D6",
        bs: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "3",
        ap: "0", //always positive
        d: "1", // always string type
      },
    },
  },
  inferno_pistol: {
    name: "Inferno pistol",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["MELTA 2", "PISTOL"],
        range: 6,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        ap: "4", //always positive
        d: "D3", // always string type
      },
    },
  },
  meltagun: {
    name: "Meltagun",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["MELTA 2"],
        range: 12,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        ap: "4", //always positive
        d: "D6", // always string type
      },
    },
  },
  plasma_gun: {
    name: "Plasma gun",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["RAPID FIRE 1"],
        range: 24,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        ap: "2", //always positive
        d: "1", // always string type
      },
      supercharge: {
        profile: "supercharge",
        rules: ["RAPID FIRE 1", "HAZARDOUS"],
        range: 24,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        ap: "3", //always positive
        d: "2", // always string type
      },
    },
  },
  plasma_pistol: {
    name: "Plasma pistol",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["PISTOL"],
        range: 12,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        ap: "2", //always positive
        d: "1", // always string type
      },
      supercharge: {
        profile: "supercharge",
        rules: ["PISTOL", "HAZARDOUS"],
        range: 12,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        ap: "3", //always positive
        d: "2", // always string type
      },
    },
  },
  plasma_cannon: {
    name: "Plasma cannon",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["BLAST"],
        range: 36,
        a: "D3",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        ap: "2", //always positive
        d: "2", // always string type
      },
      supercharge: {
        profile: "supercharge",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        a: "D3",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        ap: "3", //always positive
        d: "3", // always string type
      },
    },
  },
  helfrost_destructor: {
    name: "Helfrost destructor",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT"],
        range: 12,
        a: "D6+6",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        ap: "1", //always positive
        d: "2", // always string type
      },
      focused: {
        profile: "focused",
        rules: ["SUSTAINED HITS D3"],
        range: 36,
        a: "D3",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "11",
        ap: "3", //always positive
        d: "7", // always string type
      },
    },
  },
  helfrost_cannon: {
    name: "Helfrost cannon",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT"],
        range: 12,
        a: "D3",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        ap: "1", //always positive
        d: "2", // always string type
      },
      focused: {
        profile: "focused",
        rules: [],
        range: 36,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        ap: "3", //always positive
        d: "5", // always string type
      },
    },
  },
  twin_helfrost_cannon: {
    name: "Twin helfrost cannon",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT", "TWIN-LINKED"],
        range: 12,
        a: "D3",
        bs: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        ap: "1", //always positive
        d: "2", // always string type
      },
      focused: {
        profile: "focused",
        rules: ["TWIN-LINKED"],
        range: 36,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        ap: "3", //always positive
        d: "5", // always string type
      },
    },
  },
  helfrost_pistol: {
    name: "Helfrost pistol",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT", "PISTOL"],
        range: 12,
        a: "D3",
        bs: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "3",
        ap: "1", //always positive
        d: "1", // always string type
      },
      focused: {
        profile: "focused",
        rules: ["PISTOL"],
        range: 36,
        a: "1",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        ap: "3", //always positive
        d: "3", // always string type
      },
    },
  },
  missile_launcher: {
    name: "Missile launcher",
    profiles: {
      frag: {
        profile: "frag",
        rules: ["BLAST", "HEAVY"],
        range: 48,
        a: "D6",
        bs: "1", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        ap: "0", //always positive
        d: "1", // always string type
      },
      krak: {
        profile: "krak",
        rules: ["HEAVY"],
        range: 48,
        a: "1",
        bs: "1", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        ap: "2", //always positive
        d: "D6", // always string type
      },
    },
  },
  cyclone_missile_launcher: {
    name: "Cyclone missile launcher",
    profiles: {
      frag: {
        profile: "frag",
        rules: ["BLAST", "HEAVY"],
        range: 48,
        a: "2D6",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        ap: "0", //always positive
        d: "1", // always string type
      },
      krak: {
        profile: "krak",
        rules: ["HEAVY"],
        range: 48,
        a: "2",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        ap: "2", //always positive
        d: "D6", // always string type
      },
    },
  },
  fenrisian_great_axe: {
    name: "Fenrisian great axe",
    profiles: {
      strike: {
        profile: "strike",
        rules: [],
        range: "melee",
        a: "5",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "10",
        ap: "2", //always positive
        d: "D6+1", // always string type
      },
      sweep: {
        profile: "sweep",
        rules: [],
        range: "melee",
        a: "10",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        ap: "2", //always positive
        d: "1", // always string type
      },
    },
  },
  the_axe_morkai: {
    name: "The Axe Morkai",
    profiles: {
      one_handed: {
        profile: "one-handed",
        rules: [],
        range: "melee",
        a: "10",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        ap: "2", //always positive
        d: "1", // always string type
      },
      two_handed: {
        profile: "two-handed",
        rules: [],
        range: "melee",
        a: "6",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        ap: "2", //always positive
        d: "3", // always string type
      },
    },
  },
  living_lightning: {
    name: "Living Lightning",
    profiles: {
      witchfire: {
        profile: "witchfire",
        rules: ["PSYCHIC", "SUSTAINED HITS 2"],
        range: "24",
        a: "D6",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        ap: "1", //always positive
        d: "1", // always string type
      },
      focused_witchfire: {
        profile: "focused witchfire",
        rules: ["PSYCHIC", "SUSTAINED HITS 2", "HAZARDOUS"],
        range: "24",
        a: "2D6",
        bs: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        ap: "1", //always positive
        d: "1", // always string type
      },
    },
  },
  storm_bolter: {
    name: "Storm bolter",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["RAPID FIRE 2"],
        range: 24,
        a: 2,
        bs: 1,
        s: "4",
        ap: "0",
        d: "1",
      },
    },
  },
  skyhammer_missile_launcher: {
    name: "Skyhammer missile launcher",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["ANTI-FLY 2+"],
        range: 48,
        a: 3,
        bs: 0,
        s: "8",
        ap: "1",
        d: "D3",
      },
    },
  },
  twin_stormstrike_missile_launcher: {
    name: "Twin stormstrike missile launcher",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["ANTI-FLY 2+"],
        range: 48,
        a: "1",
        bs: 0,
        s: "10",
        ap: "2",
        d: "3",
      },
    },
  },
  grav_cannon: {
    name: "Grav-cannon",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["[ANTI-VEHICLE 2+", "HEAVY]"],
        range: 24,
        a: 3,
        bs: 1,
        s: "6",
        ap: "1",
        d: "3",
      },
    },
  },
  heavy_bolter: {
    name: "Heavy bolter",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["HEAVY", "SUSTAINED HITS 1"],
        range: 36,
        a: 3,
        bs: 1,
        s: "5",
        ap: "1",
        d: "2",
      },
    },
  },
  twin_heavy_bolter: {
    name: "Twin heavy bolter",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["HEAVY", "SUSTAINED HITS 1", "TWIN-LINKED"],
        range: 36,
        a: 3,
        bs: 1,
        s: "5",
        ap: "1",
        d: "2",
      },
    },
  },
  lascannon: {
    name: "Lascannon",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["HEAVY"],
        range: 48,
        a: "1",
        bs: 1,
        s: "12",
        ap: "3",
        d: "D6+1",
      },
    },
  },
  multi_melta: {
    name: "Multi-melta",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["MELTA 2", "HEAVY"],
        range: 18,
        a: 2,
        bs: 0,
        s: "9",
        ap: "4",
        d: "d6",
      },
    },
  },
  twin_multi_melta: {
    name: "Twin multi-melta",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["MELTA 2", "HEAVY", "TWIN-LINKED"],
        range: 18,
        a: 2,
        bs: 0,
        s: "9",
        ap: "4",
        d: "d6",
      },
    },
  },

  stormfrag_auto_launcher: {
    name: "Stormfrag auto-launcher",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["ASSAULT", "BLAST"],
        range: 12,
        a: "D6",
        bs: 0,
        s: "4",
        ap: "0",
        d: "1",
      },
    },
  },
};
/**
     weapon_name: {
      name: "Weapon Name",
      profiles: {
        profile_name1: {
          profile: "profile name 1",
          rules: ["ANTI-MONSTER 2+", "ASSAULT"],
          range: 6,
          a: "1",
          bs: 0,//how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          s:"8",
          ap: "2",//always positive
          d: "3", // always string type
        },
        profile_name2: {
          profile: "profile name 2",
          rules: ["anti-monster 2+"],
          range: "melee",
          a: 5,
          ws: 0,//how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          s:"8",
          ap: "2",//always positive
          d: "3", // always string type
        },
      },
  },
 */
/*

Close combat weapon Melee 5 3+ 6 0 1
Dreadnought combat weapon Melee 5 3+ 12 -2 3
Great wolf claw Melee 5 3+ 10 -3 3
Armoured hull Melee 6 4+ 8 0 1

Chainfist [ANTI-VEHICLE 3+] Melee 3 4+ 8 -2 2

Teeth and claws Melee 2 4+ 4 0 1
Crushing teeth and claws [EXTRA ATTACKS] Melee 3 4+ 5 -1 1
Flurry of teeth and claws [EXTRA ATTACKS]

Heirloom weapon Melee 4 3+ 5 -1 1

Wulfen claws and melee weapons Melee 6 3+ 5 -1 1
Wulfen hammer Melee 4 3+ 5 -1 1
Astartes chainsword Melee 3 3+ 4 -1 1
Power fist Melee 2 3+ 8 -2 2
Power weapon Melee 3 3+ 5 -2 1
Relic weapon Melee 5 2+ 5 -2 2
Thunder hammer [DEVASTATING WOUNDS] Melee 4 3+ 8 -2 2
Twin lightning claws [TWIN-LINKED] Melee 6 3+ 4 -2 1

Wolf claws [TWIN-LINKED] Melee 8 2+ 5 -2 1 
Claw of the Jackalwolf Melee 6 2+ 5 -2 1
Glacius Melee 6 2+ 6 -2 2
Wyrmclaw [LETHAL HITS] Melee 6 2+ 7 -2 2
Frostfang [SUSTAINED HITS 1] Melee 8 2+ 6 -3 2
Artificer crozius Melee 5 2+ 6 -2 2
Trueclaw [LETHAL HITS] Melee 6 2+ 12 -2 3
Staff of the Stormcaller [PSYCHIC, SUSTAINED HITS 2] Melee 4 3+ 7 -1 D3
The Murderclaws [TWIN-LINKED] Melee 8 3+ 14 -2 3

 */
