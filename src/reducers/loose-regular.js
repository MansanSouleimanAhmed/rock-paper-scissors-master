export const looseDiplay = (state = false, action) => {
	switch (action.type) {
		case 'LOOSE_DISPLAY':
			return !state;

		default:
			return state;
	}
};
