import { actionTypes } from './action-types';

const apartamentLoaded = (newApartaments) => {
    return {
        type: actionTypes.FETCH_APARTAMENTS_SUCCESS,
        payload: newApartaments
    }
};

const apartamentRequested = () => {
    return {
        type: actionTypes.FETCH_APARTAMENTS_REQUEST
    }
};

const apartamentError = (error) => {
    return {
        type: actionTypes.FETCH_APARTAMENTS_FAILURE,
        payload: error
    };
};

const fetchApartaments = ( dispatch, apartamentService) => () => {
    dispatch(apartamentRequested());
    apartamentService.getApartaments()
        .then((data) => {
            dispatch(apartamentLoaded(data));
        }).catch((err) => {
            dispatch(apartamentError(err));
        });
};

const updateApartament = (id) => {
    return {
        type: actionTypes.UPDATE_APARTAMENT,
        payload: id
    };
};

export {
    fetchApartaments,
    updateApartament, 
    actionTypes
};