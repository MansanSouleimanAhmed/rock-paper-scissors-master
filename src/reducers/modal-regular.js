export const regularModal = (state = false, action) => {
	switch (action.type) {
		case 'MODAL_REGULAR':
			return !state;

		default:
			return state;
	}
};
