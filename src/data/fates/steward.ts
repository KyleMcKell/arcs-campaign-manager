import { CARD_TYPES, RESOURCES } from "../cards";
import { Fate, FATE_IDS } from "./fates";

export const steward: Fate = {
  id: "F1",
  fateAct: "A",
  cards: [
    {
      cardType: CARD_TYPES.setup,
      act: 1,
      cardId: 1,
      deckId: FATE_IDS.steward,
    },
    {
      cardType: CARD_TYPES.lore,
      cardId: 2,
      deckId: FATE_IDS.steward,
      name: "Imperial Authority",
    },
    {
      cardType: CARD_TYPES.guild,
      cardId: 3,
      deckId: FATE_IDS.steward,
      name: "Dealmakers",
      resource: RESOURCES.psionic,
    },
  ],
  tokens: [
    {
      fate: "F1",
      id: "sponsored",
      name: "sponsored",
    },
  ],
};
