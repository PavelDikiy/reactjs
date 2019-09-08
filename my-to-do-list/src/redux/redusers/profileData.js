import {lvlsData} from "../../Utils/lvlsData";
const defaultState = {
    img: "",
    name: "title",
    lvl: 1,
    completed: 2,
    coins: 40,
    all: 6
};

const profileData = (state=defaultState, action) => {
    switch (action.type) {
        case "UPDATE_PROFILE_DATA_QUESTS":
            const valid = state.completed === state.all;
            const completed = valid ? 1 : ++state.completed;
            const objLvl = valid ? ++state.lvl : state.lvl;

            return {
                ...state,
                completed: completed,
                lvl: lvlsData[objLvl-1].lvl,
                all: lvlsData[objLvl-1].all,
            };
        case "UPDATE_PROFILE_DATA_COINS":
            //console.log(state);
           // console.log(state.coins, action.coin);

            return {
                ...state,
                coins: +state.coins+(+action.coin)
            };
    default:
        return state;
    }
};

export default profileData;