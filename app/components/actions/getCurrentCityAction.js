import {ACTIONS} from "../constants";

console.log('ACTIONS', ACTIONS);

function getCurrentCityAction(city) {
	return {
		type: ACTIONS.GET_CURRENT_CITY,
		currentCity: city
	};
}

export default getCurrentCityAction;