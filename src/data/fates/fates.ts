import { Card } from "../cards";
import { ValueOf } from "../types";
import { steward } from "./steward";

export const fateIds = {
  steward: "F1",
  founder: "F2",
  magnate: "F3",
  advocate: "F4",
  caretaker: "F5",
  partisan: "F6",
  admiral: "F7",
  believer: "F8",
  pathfinder: "F9",
  planetbreaker: "F10",
  hegemon: "F11",
  pirate: "F12",
  blightspeaker: "F13",
  pacifist: "F14",
  peacekeeper: "F15",
  warden: "F16",
  overlord: "F17",
  survivalist: "F18",
  redeemer: "F19",
  guardian: "F20",
  naturalist: "F21",
  gatewraith: "F22",
  conspirator: "F23",
  judge: "F24",
} as const;

export type FateId = ValueOf<typeof fateIds>;

type FateAct = "A" | "B" | "C";

type Token = {
  id: string;
  fate: FateId;
  name: string;
};

export type Fate = {
  id: FateId;
  fateAct: FateAct;
  cards: Array<Card>;
  tokens?: Array<Token>;
};

export const fateCards = [...steward.cards];
