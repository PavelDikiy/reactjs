const defaultState = {
    logsList: []
};

const logsData = (state = defaultState, action)=>{


    switch (action.type) {
        case "ACTIVE_LOGS":
            const {log} = action;
            const {logsList} = state;
            const newAr = [...logsList, log];

            return {
                ...state,
                logsList: newAr
            } ;
        default:
            return state;
    }

};

export default logsData;