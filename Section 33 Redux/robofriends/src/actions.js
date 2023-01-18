import {CHANGE_SEARCH_FIELD} from './constants.js';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})  

// export const setSearchField = (text) => {
//     console.log(text);
//     return{
//         type: CHANGE_SEARCH_FIELD,
//         payload: text
//     }
// }