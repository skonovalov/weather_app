import {ACTIONS, initialState} from "../constants";

export default function addCityReducer(state = initialState, action) {
	if( action.type === ACTIONS.ADD_CITY) {
		let newCities = state.cities.slice(0).push(action.city);
		console.log( state );
		return Object.assign({}, ...state, {
			cities: newCities
		});
	}
	return state;
}
