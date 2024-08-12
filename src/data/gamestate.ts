import {
  ActionCard,
  actionCards,
  Card,
  cards,
  deckIds,
  getCard,
  Resource,
  resources,
} from "./cards";
import { FateId, fateIds } from "./fates/fates";

type Player =
  | {
      isActive: true;
      fate: FateId;
      cards: Array<string>;
      resources: Array<Resource>;
      outrage: Array<Resource>;
      score: number;
      allegiance: "outlaw" | "regent";
      isFirstRegent: boolean;
    }
  | { isActive: false };

type Color = "red" | "blue" | "yellow" | "white";

type Players = {
  red: Player;
  yellow: Player;
  blue: Player;
  white: Player;
};

type Scrap = {
  cards: Array<Card>;
};

type Act = {
  players: Players;
  scrap: Scrap;
  rulesBooklet: Array<Card>;
  actionDeck: Array<ActionCard>;
};

type Gamestate = {
  enteringAct: 1 | 2 | 3 | "complete";
  act1: Act;
  act2: Act | null;
  act3: Act | null;
};

type PlayerSelection = {
  blue?: FateId;
  red?: FateId;
  yellow?: FateId;
  white?: FateId;
};

const setupFate = (fateId: FateId) => {
  switch (fateId) {
    case "F1": {
    }
  }
};

const setupPlayerWithFate = (fate: FateId, hasInitiative: boolean): Player => {
  return {
    isActive: true,
    fate,
    cards: [],
    resources: [],
    score: 0,
    allegiance: "regent",
    isFirstRegent: hasInitiative,
    outrage: [],
  };
};

const setupPlayers = (
  playerSelection: PlayerSelection,
  playerIniative: Color,
) => {
  const red: Player = playerSelection.red
    ? setupPlayerWithFate(playerSelection.red, playerIniative === "red")
    : { isActive: false };
  const blue: Player = playerSelection.blue
    ? setupPlayerWithFate(playerSelection.blue, playerIniative === "blue")
    : { isActive: false };
  const yellow: Player = playerSelection.yellow
    ? setupPlayerWithFate(playerSelection.yellow, playerIniative === "yellow")
    : { isActive: false };
  const white: Player = playerSelection.white
    ? setupPlayerWithFate(playerSelection.white, playerIniative === "white")
    : { isActive: false };

  return {
    red,
    blue,
    white,
    yellow,
  };
};

type SelectedColors = {
  blue: boolean;
  red: boolean;
  yellow: boolean;
  white: boolean;
};

const setupTable = (colorsInGame: Array<Color>): Act => {
  const activeColors: SelectedColors = {
    blue: false,
    red: false,
    yellow: false,
    white: false,
  };

  colorsInGame.forEach((color) => {
    activeColors[color] = true;
  });

  const randomIndex = Math.floor(Math.random() * colorsInGame.length);

  const colorWithInitiative = colorsInGame[randomIndex];

  let actionDeck = [...actionCards];
  let edicts = [
    getCard(deckIds.starting, 3),
    getCard(deckIds.starting, 4),
    getCard(deckIds.starting, 5),
  ];

  if (colorsInGame.length < 4) {
    actionDeck = actionCards.filter((actionCard) => !actionCard.fourPlayerOnly);
  }

  if (colorsInGame.length === 2) {
    edicts.unshift(getCard(deckIds.starting, 2));
  }

  const rulesBooklet = edicts.filter((card) => !!card);

  return {
    players: {
      red: { isActive: false },
      blue: { isActive: false },
      white: { isActive: false },
      yellow: { isActive: false },
    },
    scrap: {
      cards: [],
    },
    actionDeck,
    rulesBooklet,
  };
};

const initializeGamestate = (
  playerSelection: PlayerSelection,
): Gamestate | null => {
  return null;
};

const mygs = initializeGamestate({});

// const exampleGamestate: Gamestate = {
//   enteringAct: 1,
//   act1: {
//     players: {
//       red: {
//         isActive: true,
//         fate: fateIds.steward,
//         cards: ["F1_02", "CC_01"],
//         resources: [],
//         score: 0,
//         allegiance: "outlaw",
//         isFirstRegent: false,
//         outrage: [],
//       },
//       yellow: {
//         isActive: false,
//       },
//       blue: {
//         isActive: true,
//         fate: fateIds.believer,
//         cards: [],
//         resources: [],
//         score: 0,
//         allegiance: "regent",
//         isFirstRegent: false,
//         outrage: [],
//       },
//       white: {
//         isActive: true,
//         fate: fateIds.magnate,
//         cards: [],
//         resources: [],
//         score: 0,
//         allegiance: "regent",
//         isFirstRegent: false,
//         outrage: [],
//       },
//     },
//     scrap: {
//       cards: [],
//     },
//   },
// };
