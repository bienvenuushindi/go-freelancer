/* eslint-disable */
const LOADING = 'LOADING';
const LOADED = 'LOADED';



export const loading = () => ({
    type: LOADING, payload: true,
});

export const loaded = () => ({
    type: LOADED, payload: false,
});

const loaderReducer = (state = true, action) => {
    switch (action.type) {
        case LOADING:
            return action.payload;
        case LOADED:
            return action.payload;
        default:
            return state;
    }
};

export default loaderReducer;