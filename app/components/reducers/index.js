import {combineReducers} from "redux";

const GET_CURRENT_CITY = "GET_CURRENT_CITY";
const GET_CURRENT_TEMP = "GET_CURRENT_TEMP";

function getCurrentCityAction(city) {
    return {
        type: GET_CURRENT_CITY,
        currnetCity: city
    };
}

function getCurrentTempAction(temp) {
    return {
        type: GET_CURRENT_TEMP,
        currnetTemp: temp
    };
}

export default rootReducer({
    currentCity: getCurrentCityReducer,
    currentTemp: getCurrentTempReducer
});

