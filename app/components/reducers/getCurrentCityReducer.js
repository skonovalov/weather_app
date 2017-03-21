import {ACTIONS, initialState} from "../constants";

export default function getCurrentCityReducer(state = initialState, action) {
	if( action.type === ACTIONS.GET_CURRENT_CITY) {
		return Object.assign({}, state, {
			currentCity: action.currentCity
		});
	}
	return state;
}