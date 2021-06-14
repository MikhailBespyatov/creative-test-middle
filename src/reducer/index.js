import { actionTypes } from '../actions';

const initialState = {
    apartaments: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_APARTAMENTS_SUCCESS:
            return {
                apartaments: action.payload,
                loading: false,
                error: null
            };
            
        case actionTypes.FETCH_APARTAMENTS_REQUEST:
            return {
                apartaments: [],
                loading: true,
                error: null
            };

        case actionTypes.FETCH_APARTAMENTS_FAILURE:
            return {
                apartaments: [],
                loading: false,
                error: action.payload
            };

        case actionTypes.UPDATE_APARTAMENT:
            const updateId = action.payload;
            const index = state.apartaments.findIndex((apartament) => apartament.id === updateId);
            const updateApartament = state.apartaments[index];
            const likedApartament = {...updateApartament, liked: !updateApartament.liked};
            const newApartaments = [
                ...state.apartaments.slice(0, index),
                likedApartament,
                ...state.apartaments.slice(index + 1)
            ];

            return {
                ...state,
                apartaments: newApartaments
            };

        default:
            return state;
    }
};

export default reducer;