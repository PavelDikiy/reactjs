export const addQuest = (title = 'пусто', coin = 0) => {
    return {
        type: 'ADD_QUESTS',
        isChecked: false,
        title,
        coin,
        id: Math.round(Math.random()*1000)
    }
};

export const removeQuest = (id) => {
    return {
        type: 'REMOVE_QUESTS',
        id
    }
};

export const checkedQuest = (id) => {
    return {
        type: 'CHECKED_QUESTS',
        id
    }
};