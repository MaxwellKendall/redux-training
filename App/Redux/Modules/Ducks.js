// Ducks

// (1) Actions

{
    type: FETCHING_DUCK,
}

{
    type: FETCHING_DUCK_ERROR,
    error: "Error fetching duck"
}

{
    type: FETCHING_DUCK_SUCCESS,
    duck
}

{
    type: REMOVE_FETCHING
}

{
    type: ADD_DUCK,
    duck
}

{
    type: ADD_MULTIPLE_DUCKS,
    ducks
}

// (2) Reducers

const initialState = {
    isFetching: true,
    error: '',
}

function ducks(state = initialState, actions){
    switch(action.type){
        case FETCHING_DUCK :
            return {
                ...state,
                isFetching: true,
            }
        case ADD_DUCK :
        case FETCHING_DUCK_SUCCESS :
            return {
                ...state,
                error: '',
                isFetching: false,
                [action.duck.duckId]: action.duck
            }
        case FETCHING_DUCK_ERROR :
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case REMOVE_FETCHING :
            return {
                ...state,
                isFetching: false,
                error: '',
            }
        case ADD_MULTIPLE_DUCKS :
            return {
                ...state,
                ...action.ducks,
            }
        default :
            return state
            }
        }
    }
}
