import { combineReducers } from 'redux';

import { winDisplay } from './win-regular';
import { regularModal } from './modal-regular';
import scoreRegular from './score-regular';
import { looseDiplay } from './loose-regular';
const allReducers = combineReducers({
	score: scoreRegular,
	regularWinDisplay: winDisplay,
	regularLooseDisplay: looseDiplay,
	regularModal: regularModal,
});
export default allReducers;
