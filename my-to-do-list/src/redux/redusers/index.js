import questsData from './questsData';
import profileData from './profileData';
import logsData from './logsData';
import {combineReducers} from 'redux';

export default combineReducers({
    questsData,
    profileData,
    logsData
});