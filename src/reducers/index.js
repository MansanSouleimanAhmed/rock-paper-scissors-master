import { combineReducers } from 'redux';

import { loseDisplay, winDisplay } from './regular-display';
import { regularModal } from './modal-regular';
import scoreRegular from './score-regular';
const allReducers = combineReducers({
	score: scoreRegular,
	regularWinDisplay: winDisplay,
	regularLoseDisplay: loseDisplay,
	regularModal: regularModal,
});
export default allReducers;
