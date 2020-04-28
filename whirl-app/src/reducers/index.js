import { combineReducers } from 'redux';
import authReducer from './authReducer';
import autofillReducer from './autofillReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	autofill: autofillReducer,
	auth: authReducer,
	form: formReducer,
});
