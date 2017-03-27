import {ACTIONS} from "../constants";

function getCurrentTempAction(temp) {
	return {
		type: ACTIONS.GET_CURRENT_TEMP,
		currentTemp: temp
	};
}

export default getCurrentTempAction;