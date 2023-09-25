const reducers = {
    ajouterFavorite: (state, action) => {
        state.favorites.push(action.payload);
    },
    enleverFavorite: (state, action) => {
        state.favorites = state.favorites.filter((favorite) => favorite.infoRepas !== action.payload.infoRepas);
    }
}

export default reducers;