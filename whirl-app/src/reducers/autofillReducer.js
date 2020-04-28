import { SAVE_LOCATIONS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case SAVE_LOCATIONS:
			return { state, ...action.payload };

		default:
			return state;
	}
};
