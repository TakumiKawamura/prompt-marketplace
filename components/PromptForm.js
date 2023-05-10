import React, { useState } from 'react';
import styles from '../styles/PromptForm.module.css';

const PromptForm = ({ onSubmit }) => {
  const [genre, setGenre] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  // 新しいpromptの情報を収集し、親コンポーネント(index.js)に渡す
  const handleSubmit_comp = (e) => {
    e.preventDefault();
    // 入力されたprompt情報を収集し、親コンポーネントに渡すためにonSubmitを呼び出す
    onSubmit({ genre, title, description, content });
    // ユーザーの入力をクリア
    setGenre('');
    setTitle('');
    setDescription('');
    setContent('');
  };

  // onSubmitはform送信時に発火
  // onSubmit発火時にhandleSubmit_comp関数が呼び出される
  return (
    <form className={styles.form} onSubmit={handleSubmit_comp}>
      <label>ジャンル</label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
        <option value="">選択してください</option>
        <option value="ChatGPT">ChatGPT</option>
        <option value="DALL-E">DALL-E</option>
        <option value="Midjourney">Midjourney</option>
      </select>
      <h2>プロンプトを出品する</h2>
      <label>タイトル</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>概略</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      <label>プロンプト詳細</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">出品する</button>
    </form>
  );
};

export default PromptForm;
