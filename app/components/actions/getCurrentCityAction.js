import ACTIONS from "../constants";

function getCurrentCityAction(city) {
	return {
		type: ACTIONS.GET_CURRENT_CITY,
		currentCity: city
	};
}

export default getCurrentCityAction;