import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromptCard from '../components/PromptCard';
import PromptFilter from '../components/PromptFilter';
import PromptForm from '../components/PromptForm';
import { getAllPrompts, getFilteredPrompts } from '../data/helpers';

const Home = () => {
    ////// prompts配列にすべてor絞り込んだprompts.jsデータを格納(ここから)
    //wawawawawa
    // const [prompts, setPrompts] = useState(getAllPrompts());
    // const [allPrompts, setAllPrompts] = useState(getAllPrompts());
    const initialPrompts = getAllPrompts();
    const [prompts, setPrompts] = useState(initialPrompts);
    const [allPrompts, setAllPrompts] = useState(initialPrompts);
    //wawawawawa

    //wawawawawa
    // const handleFilter = (genre) => {
    //     if (genre) {setPrompts(getFilteredPrompts(genre));} // helpers.jsで定義した関数で指定のgenreのprompts.jsonデータを取得
    //     else {setPrompts(getAllPrompts());} // helpers.jsで定義した関数で、すべてのprompts.jsonデータを取得
    // };
    const handleFilter = (genre) => {
        if (genre) {
          setPrompts(allPrompts.filter((prompt) => prompt.genre === genre));
        } else {
          setPrompts(allPrompts);
        }
    };
    //wawawawawa
    ////// prompts配列にすべてor絞り込んだprompts.jsデータを格納(ここまで)


    ////// フォームで受け取ったnewPromptデータをpromptsデータリストに追加(ここから)
    const handleSubmit = (newPrompt) => {
        // デモ版では、データの永続化は行わないため、ページをリロードすると追加したプロンプトは消えます。
        setPrompts([...prompts, newPrompt]);
        //wawawawawa
        const newAllPrompts = [...allPrompts, newPrompt];
        setAllPrompts(newAllPrompts);
        setPrompts(newAllPrompts);
        //wawawawawa
    };
    ////// フォームで受け取ったnewPromptデータをpromptsデータリストに追加(ここまで)

    
    return (
        <div>
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
    