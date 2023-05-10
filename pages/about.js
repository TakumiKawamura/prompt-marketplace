import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromptCard from '../components/PromptCard';
import PromptFilter from '../components/PromptFilter';
import PromptForm from '../components/PromptForm';
import { getAllPrompts, getFilteredPrompts } from '../data/helpers';

const Home = () => {
  const [prompts, setPrompts] = useState(getAllPrompts());

  const handleFilter = (genre) => {
    if (genre) {
      setPrompts(getFilteredPrompts(genre));
    } else {
      setPrompts(getAllPrompts());
    }
  };

  const handleSubmit = (newPrompt) => {
    // 新しいプロンプトを追加する処理を実装します。
    // デモ版では、データの永続化は行わないため、ページをリロードすると追加したプロンプトは消えます。
    setPrompts([...prompts, newPrompt]);
  };

  return (
    <div className={StyleSheet.container}>
      <Header />
      <PromptFilter onFilter={handleFilter} />
      <PromptForm onSubmit={handleSubmit} />
      <div className="prompt-list">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
            ))}
      </div>
      <Footer />
    </div>
  );
};
    
export default Home;
    