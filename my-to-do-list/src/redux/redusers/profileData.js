const defaultState = {
  lvl: 1,
  coins: 40,
  completedQuests: 2,
  name: 'Павел Дикий',
};

const profileData = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE_COMPLETED_QUESTS':
      const completedQuests = (action.completedQuests) ? action.completedQuests : state.completedQuests;
      return { ...state, completedQuests };

    case 'UPDATE_PROFILE_COINS_VALUE':
      const coins = (action.coins) ? action.coins : state.coins;
      return { ...state, coins };

    case 'UPDATE_PROFILE_LEVEL_UP':
      return { ...state, lvl: state.lvl + 1, completedQuests: 0 }

    default:
      return state;
  }
};


export default profileData;


// const profileData = (state = defaultState, action) => {
//   switch (action.type) {
//     case "UPDATE_PROFILE_DATA_QUESTS":
//       const valid = state.completed === state.all;
//       const completed = valid ? 1 : ++state.completed;
//       const objLvl = valid ? ++state.lvl : state.lvl;

//       return {
//         ...state,
//         completed: completed
//         lvl: lvlsData[objLvl-1].lvl,
//         all: lvlsData[objLvl-1].all,
//       };
//     case "UPDATE_PROFILE_DATA_COINS":
//       return {
//         ...state,
//         coins: +state.coins + +action.coin
//       };
//     default:
//       return state;
//   }
// };

