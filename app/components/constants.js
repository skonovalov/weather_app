export const ACTIONS = {
	GET_CURRENT_CITY: "GET_CURRENT_CITY",
	GET_CURRENT_TEMP: "GET_CURRENT_TEMP",
	ADD_CITY: "ADD_CITY"
};

export const initialState = {
	currentCity: "",
	currentTemp: "",
	cities: []
};

export default { ACTIONS, initialState };