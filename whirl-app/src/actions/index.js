import axios from 'axios';
import { FETCH_USER, SAVE_LOCATIONS } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	console.log(res.data);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveAutofill = (data) => {
	return { type: SAVE_LOCATIONS, payload: data };
};
