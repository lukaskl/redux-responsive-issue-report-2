// reducer.js

import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'

export default combineReducers({
    // passing null to the reducer factory uses the default breakpoints
    browser: createResponsiveStateReducer(null, {
        infinity: "veryBig"
    })
})