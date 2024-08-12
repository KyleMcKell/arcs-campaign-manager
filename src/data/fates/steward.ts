import { cardTypes, resources } from "../cards";
import { Fate, fateIds } from "./fates";

export const steward: Fate = {
  id: fateIds.steward,
  fateAct: "A",
  cards: [
    {
      cardType: cardTypes.setup,
      act: 1,
      cardId: 1,
      deckId: fateIds.steward,
    },
    {
      cardType: cardTypes.lore,
      cardId: 2,
      deckId: fateIds.steward,
      name: "Imperial Authority",
    },
    {
      cardType: cardTypes.guild,
      cardId: 3,
      deckId: fateIds.steward,
      name: "Dealmakers",
      resource: resources.psionic,
    },
    {
      cardType: cardTypes.resolution,
      act: 1,
      cardId: 4,
      deckId: fateIds.steward,
    },
    {
      cardType: cardTypes.vox,
      cardId: 5,
      deckId: fateIds.steward,
      name: "Council Intrigue",
    },
    {
      cardType: cardTypes.guild,
      cardId: 6,
      deckId: fateIds.steward,
      name: "Tax Collectors",
      resource: resources.relic,
    },
    {
      cardType: cardTypes.guild,
      cardId: 7,
      deckId: fateIds.steward,
      name: "Hunter Squads",
      resource: resources.weapon,
    },
    {
      cardType: cardTypes.law,
      cardId: 8,
      deckId: fateIds.steward,
      name: "Imperial Protectors",
    },
    {
      cardId: 9,
      cardType: cardTypes.vox,
      deckId: fateIds.steward,
      name: "Empire Falls",
    },
    {
      cardId: 10,
      cardType: cardTypes.guild,
      deckId: fateIds.steward,
      name: "Lesser Regent",
      resource: resources.psionic,
    },
    {
      cardId: 11,
      cardType: cardTypes.guild,
      deckId: fateIds.steward,
      name: "Lesser Regent",
      resource: resources.psionic,
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
