const defaultState = {
    quests: [],
};

const questsData = (state = defaultState, action) => {
    const {type, title, coin, isChecked, id} = action;

    switch (type) {
        case "ADD_QUESTS":

            return {
                ...state,
                quests: [
                    ...state.quests,
                    {
                        title,
                        coin,
                        isChecked,
                        id
                    }
                ]
            };

        case "REMOVE_QUESTS":
            const newQuestArray = state.quests.filter((_item) => {
                return _item.id !== id; // #
            });

            return {
                ...state,
                quests: newQuestArray
            };

        case "CHECKED_QUESTS":

            const newState = state.quests.map((_item) => {
                if(_item.id === id){
                    _item.isChecked = !_item.isChecked;
                }
                return _item;
            });

            console.log(newState);

            return {
                ...state,
                quests: newState
            };

        default: // #
            return state; // #
    }
};

export default questsData;