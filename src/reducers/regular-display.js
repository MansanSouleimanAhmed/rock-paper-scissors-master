export const winDisplay = (state = false, action) => {
	switch (action.type) {
		case 'WIN_DISPLAY':
			return !state;

		default:
			return state;
	}
};

export const loseDisplay = (state = false, action) => {
	switch (action.type) {
		case 'LOSE_DISPLAY':
			return !state;

		default:
			return state;
	}
};
