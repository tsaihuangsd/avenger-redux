import axios from 'axios';

export const AVENGERS_FETCH_START = 'AVENGERS_FETCH_START';
export const AVENGERS_FETCH_COMPLETE = 'AVENGERS_FETCH_COMPLETE';
export const AVENGERS_FETCH_FAILURE = 'AVENGERS_FETCH_FAILURE';

export const ADD_AVENGER_START = 'ADD_AVENGER_START';
export const ADD_AVENGER_COMPLETE = 'ADD_AVENGER_COMPLETE';
export const ADD_AVENGER_FAILURE = 'ADD_AVENGER_FAILURE';

export const DELETE_AVENGER_START = 'DELETE_AVENGER_START';
export const DELETE_AVENGER_COMPLETE = 'DELETE_AVENGER_COMPLETE';
export const DELETE_AVENGER_FAILURE = 'DELETE_AVENGER_FAILURE';

export const UPDATE_AVENGER_START = 'UPDATE_AVENGER_START';
export const UPDATE_AVENGER_COMPLETE = 'UPDATE_AVENGER_COMPLETE';
export const UPDATE_AVENGER_FAILURE = 'UPDATE_AVENGER_FAILURE';

export const SET_UPDATE_AVENGER = 'SET_UPDATE_AVENGER';

export const getAvengers = () => dispatch => {
    dispatch({ type: AVENGERS_FETCH_START });
    const promise = axios.get('http://localhost:5000/avengers');

    promise
        .then(response => {
            dispatch({ type: AVENGERS_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: AVENGERS_FETCH_FAILURE, payload: err });
        });
};

export const addNewAvenger = avenger => dispatch => {
    dispatch({ type: ADD_AVENGER_START });

    axios.post('http://localhost:5000/avengers', avenger)
        .then(response => {
            dispatch({ type: ADD_AVENGER_COMPLETE, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_AVENGER_FAILURE, payload: err });
        });
};

export const deleteAvenger = avengerId => dispatch => {
    dispatch({ type: DELETE_AVENGER_START });

    axios.delete(`http://localhost:5000/avengers/${avengerId}`)
        .then(response => {
            dispatch({ type: DELETE_AVENGER_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: DELETE_AVENGER_FAILURE, payload: err });
        });
};

export const setUpdateAvenger = id => {
    return {
        type: SET_UPDATE_AVENGER,
        payload: id,
    };
};

export const updateAvenger = avenger => dispatch => {
    dispatch({ type: UPDATE_AVENGER_START });

    axios.put(`http://localhost:5000/avengers/${avenger.id}`, avenger)
        .then(response => {
            dispatch({ type: UPDATE_AVENGER_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: UPDATE_AVENGER_FAILURE, payload: err});
        });
};