export const updateProfileDataQuests = ()=>{
    return {
        type: "UPDATE_PROFILE_DATA_QUESTS",
    }
};

export const updateProfileDataCoins = (coin)=>{
    return {
        type: "UPDATE_PROFILE_DATA_COINS",
        coin
    }
};