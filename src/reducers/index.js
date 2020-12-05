import {combineReducers} from 'redux';
import scoreRegular from './score-regular';
const allReducers = combineReducers({
    score :scoreRegular
})
export default allReducers