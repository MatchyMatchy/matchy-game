import { Dispatch, SetStateAction } from "react";

export interface gameContext {
  gameState: {
    scene: number;
    round: "One" | "Two" | "Three";
    players: Array<{ name: string; points: number }>;
  };
  pairState: {
    turns_remaining: number;
    player_1: {
      name: string;
      points: number;
      guesses: Array<{
        word: string;
        is_matched: boolean;
        matchy_word: string;
      }>;
    };
    player_2: {
      name: string;
      points: number;
      guesses: Array<{
        word: string;
        is_matched: boolean;
        matchy_word: string;
      }>;
    };
    is_matched: boolean;
  };
  setGameState: Dispatch<SetStateAction<gameState>>;
  setPairState: Dispatch<SetStateAction<pairState>>;
}

export type gameState = gameContext["gameState"];
export type pairState = gameContext["pairState"];
