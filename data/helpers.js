import prompts from './prompts.json';

// 全てのpromptを返す
export const getAllPrompts = () => {
    return prompts;
};

// 指定したジャンルに一致するpromptのみを返す
export const getFilteredPrompts = (genre) => {
    return prompts.filter((prompt) => prompt.genre === genre);
};
