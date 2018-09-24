import {
    AVENGERS_FETCH_START,
    AVENGERS_FETCH_COMPLETE,
    AVENGERS_FETCH_FAILURE,
    ADD_AVENGER_START,
    ADD_AVENGER_COMPLETE,
    ADD_AVENGER_FAILURE,
    DELETE_AVENGER_START,
    DELETE_AVENGER_COMPLETE,
    DELETE_AVENGER_FAILURE,
    SET_UPDATE_AVENGER,
    UPDATE_AVENGER_START,
    UPDATE_AVENGER_COMPLETE,
    UPDATE_AVENGER_FAILURE,
} from '../actions';

const initialState = {
    addingAvenger: false,
    avengers: [],
    isLoading: false,
    isDeleting: false,
    isUpdating: false,
    error: '',
    avengerToUpdate: null,
};

export const avengersReducer = (state = initialState, action) => {
    switch(action.type) {
        case AVENGERS_FETCH_START:
            return { ...state, isLoading: true };
        case AVENGERS_FETCH_COMPLETE:
            return { ...state, isLoading: false, avengers: action.payload };
        case AVENGERS_FETCH_FAILURE:
            console.log(action.payload);
            return { ...state, isLoading: false, error: action.payload };
        case ADD_AVENGER_START:
            return { ...state, addingAvenger: true };
        case ADD_AVENGER_COMPLETE:
            return { ...state, addingAvenger: false, avengers: action.payload };
        case ADD_AVENGER_FAILURE:
            console.log(action.payload);
            return { ...state, addingAvenger: false, error: action.payload };
        case DELETE_AVENGER_START:
            return { ...state, isDeleting: true };
        case DELETE_AVENGER_COMPLETE: 
            return { ...state, isDeleting: false, avengers: action.payload };
        case DELETE_AVENGER_FAILURE:
            console.log(action.payload);
            return { ...state, isDeleting: false, error: action.payload };
        case SET_UPDATE_AVENGER:
            const avenger = state.avengers.find(avenger => avenger.id === action.payload);
            return { ...state, avengerToUpdate: avenger ? avenger : null }
        case UPDATE_AVENGER_START:
            return { ...state, isUpdating: true };
        case UPDATE_AVENGER_COMPLETE: 
            return { ...state, isUpdating: false, avengers: action.payload };
        case UPDATE_AVENGER_FAILURE:
            console.log(action.payload);
            return { ...state, isUpdating: false, error: action.payload };
        default:
            return state;
    }
}