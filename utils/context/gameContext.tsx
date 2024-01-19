import { createContext, ReactNode, useState } from "react";

import type {
  gameContext,
  gameState,
  pairState,
} from "@utils/types/context-types";

interface Props {
  children: ReactNode;
}

export const GameContext = createContext<gameContext>({
  gameState: {
    scene: 1,
    round: "One",
    players: [],
  },
  pairState: {
    is_matched: false,
    turns_remaining: 5,
    player_1: {
      name: "",
      points: 0,
      guesses: [],
    },
    player_2: { name: "", points: 0, guesses: [] },
  },
  setGameState: () => {},
  setPairState: () => {},
});

const GameProvider = ({ children }: Props) => {
  const [pairState, setPairState] = useState<pairState>({
    is_matched: false,
    turns_remaining: 5,
    player_1: {
      name: "Hara",
      points: 0,
      guesses: [
        { word: "Friends", is_matched: true, matchy_word: "Community" },
        { word: "Sea", is_matched: false, matchy_word: "Water" },
        { word: "Homework", is_matched: true, matchy_word: "Laptop" },
      ],
    },
    player_2: {
      name: "Nonso",
      points: 0,
      guesses: [
        { word: "Friends", is_matched: true, matchy_word: "Community" },
        { word: "Cup", is_matched: false, matchy_word: "Water" },
        { word: "Homework", is_matched: true, matchy_word: "Laptop" },
      ],
    },
  });

  const [gameState, setGameState] = useState<gameState>({
    scene: 100,
    round: "One",
    players: [],
  });

  return (
    <GameContext.Provider
      value={{ gameState, pairState, setPairState, setGameState }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
