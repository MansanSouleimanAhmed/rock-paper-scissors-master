export const looseDiplay = (state = false, action) => {
	switch (action.type) {
		case 'LOOSE_DISPLAY':
			return true;
		case 'FALSE':
			return false;
		default:
			return state;
	}
};
