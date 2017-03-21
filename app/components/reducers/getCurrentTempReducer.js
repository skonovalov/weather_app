import {ACTIONS, initialState} from "../constants";

console.log(ACTIONS.GET_CURRENT_TEMP);

export default function getCurrentTempReducer(state = initialState, action) {
	if( action.type === ACTIONS.GET_CURRENT_TEMP) {
		return Object.assign({}, state, {
			currentTemp: action.currentTemp
		});
	}
	return state;
}