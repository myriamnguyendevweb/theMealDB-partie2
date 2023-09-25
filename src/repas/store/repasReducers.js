const reducers = {
    updateRepas: (state, action) => {
        if (action.payload && action.payload.results) {
            state.meals = action.payload.results;
        }

        return state;
    },
}

export default reducers;