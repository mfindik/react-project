//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import geziReduktor from "./reduktor/geziReduktor";



const rootReducer = combineReducers({
    gezi :geziReduktor //başkaları varsa virgül koyarak ekleyebilirsin

})

export default rootReducer;