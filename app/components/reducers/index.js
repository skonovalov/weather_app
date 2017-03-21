import {combineReducers} from "redux";

import getCurrentCityReducer from "./getCurrentCityReducer";
import getCurrentTempReducer from "./getCurrentTempReducer";
import addCityReducer from "./addCityReducer";

const rootReducer = combineReducers({
	getCurrentCityReducer,
	getCurrentTempReducer,
    addCityReducer
});
export default rootReducer;

