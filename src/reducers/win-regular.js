export const winDisplay = (state = false, action) => {
	switch (action.type) {
		case 'WIN_DISPLAY':
			return true;
		case 'FALSE':
			return false;
		default:
			return state;
	}
};
