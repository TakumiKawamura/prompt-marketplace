import React from 'react';
import styles from '../styles/PromptCard.module.css';

const PromptCard = ({ prompt }) => {
  return (
    <div className={styles.card}>
      <h2>ジャンル：{prompt.genre}</h2>
      <p>タイトル：{prompt.title}</p>
      <p>概略：{prompt.description}</p>
      <p>プロンプト詳細：{prompt.content}</p>
    </div>
  );
};

export default PromptCard;