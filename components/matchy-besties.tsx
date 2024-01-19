import React from "react";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "@styles/page/matchyBestie.module.css";
import Player_badge from "@components/player-badge";

// gameState
interface Props {
  name_1: string;
  name_2: string;
  matched_words: Array<{
    word: string;
    is_matched: boolean;
    matchy_word: string;
  }>;
}
const matchy_besties = ({ name_1, name_2, matched_words }: Props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.secDiv}>
        <FaHeart className={styles.icon} />
        <h1 className={styles.header}> Matchy Besties</h1>
        <p className={styles.subTitle}>You two had the most matched words</p>
        <div className={styles.players}>
          <Player_badge name={name_1} />
          <Player_badge name={name_2} />
        </div>
        <p className={styles.subTitle}>
          Matching words: {matched_words.length}
        </p>
        {matched_words.map((matched_word) => (
          <div key={matched_word.matchy_word} className={styles.playground}>
            {matched_word.word}
          </div>
        ))}
      </div>
      <AiOutlineEllipsis className={styles.ellipsis} />

      <button className={styles.shareBtn}>Share via ...</button>
      <button className={styles.leaderboardBtn}>See full leaderboard</button>
    </div>
  );
};

export default matchy_besties;
