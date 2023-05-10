import React, { useState } from 'react';

// ジャンルを指定するためのドロップダウンリストを表示
const PromptFilter = ({ onFilter }) => {
  const [genre, setGenre] = useState('');

  // ドロップダウンリストでジャンルが変更された時に呼び出される
  const handleChange = (e) => {
    // 選択したジャンルを変数genreにセット
    setGenre(e.target.value);
    // handleFilterの引数としてgenreを渡す
    onFilter(e.target.value); //onFIlterは、呼び出し元の親page(index.js)の方でonFilter={handleFilter}のようにhandleFilterがセットされている
  };

  return (
    <div className="prompt-filter">
      <label>ジャンルで絞り込む:</label>
      <select value={genre} onChange={handleChange}>
        <option value="">すべて</option>
        <option value="ChatGPT">ChatGPT</option>
        <option value="DALL-E">DALL-E</option>
        <option value="Midjourney">Midjourney</option>
      </select>
    </div>
  );
};

export default PromptFilter;
