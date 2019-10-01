const ON_SEARCH_FLAG = 'ON_SEARCH_FLAG';
const OFF_SEARCH_FLAG = 'OFF_SEARCH_FLAG';
const DO_SEARCH = 'DO_SEARCH';

let InitialState = {
    searchFlag:false,
    searchList: []
}

let SearchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ON_SEARCH_FLAG: {
            return {
                ...state,
                searchFlag: true
            }
        }
        case OFF_SEARCH_FLAG: {
            return {
                ...state,
                searchFlag: false
            }
        }

        case DO_SEARCH: {
            return {
                ...state,
                searchList:action.inputData
            };
        }

        default:
            return state;
    }
};

export const searchOn = () => ({type: ON_SEARCH_FLAG});
export const searchOff = () => ({type: OFF_SEARCH_FLAG});
export const doSearch = inputData => ({type: DO_SEARCH,inputData});

export default SearchReducer;